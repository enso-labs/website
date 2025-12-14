---
title: "Most ‘AI Agents’ Break at Step Two. Orchestra Is Built for What Comes After."
date: "2025-12-14"
excerpt: "Toy demos are easy. Durable, autonomous agents are not. This walkthrough shows the real complexity behind production agents—and how Orchestra abstracts it without hiding the power."
categories: ["Agents", "API", "Infrastructure"]
coverImage: "https://github.com/enso-labs/static/blob/master/orchestra_api_guide.png?raw=true"
author:
  name: "Ryan Eggleston"
  picture: "https://avatars.githubusercontent.com/u/40816745?s=96&v=4"
  linkedin: 
---

Building agents often involves a lot of trial and error. At [Enso Labs](https://enso.sh), we believe in a robust "Create, Test, Deploy" workflow. Orchestra isn't just a UI; it's a powerful API platform that lets you define tools, verify them, and compose them into intelligent agents programmatically.

In this walkthrough, we’ll build an agent that can publish content to an external API. We will:

1.  Create an API tool connected to `jsonplaceholder` to **create a blog post**.
2.  Test the tool in isolation to ensure it works.
3.  Test LLM invocation to see how the model reasons.
4.  Configure a persistent Assistant with the tool.
5.  Run the full agent via the streaming endpoint.

We'll use `curl` for all examples so you can follow along in your terminal.

## Step 1: Create an API Tool

First, we need to teach Orchestra how to talk to the external data source. We'll define a tool named `create_post` that sends a POST request to the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.

We'll use the `/api/tools` endpoint to register this tool. Note how we define the `args_schema` so the LLM knows exactly what arguments to provide.

```bash
curl -X POST "https://chat.enso.sh/api/tools" \
  -H "Content-Type: application/json" \
  -H "x-api-key: enso_abc123..." \
  -d '{
    "name": "create_post",
    "description": "Create a new blog post on JSONPlaceholder.",
    "type": "api",
    "config": {
      "api_tool": {
        "base_url": "https://jsonplaceholder.typicode.com",
        "method": "POST",
        "endpoint": "/posts",
        "args_schema": {
          "type": "object",
          "properties": {
            "title": {"type": "string", required: true},
            "body": {"type": "string",  required: true},
            "userId": {"type": "integer", default: 1}
          },
          "required": ["title", "body", "userId"]
        }
      }
    }
  }'
```

The system now knows that `create_post` means "Perform a POST request to `https://jsonplaceholder.typicode.com/posts`" with the specified payload structure.

## Step 2: Verify the Tool

Before we let an AI loose with this tool, let's make sure it actually works. Orchestra provides a `/api/tools/invoke` endpoint that lets you execute tools directly.

```bash
curl -X POST "https://chat.enso.sh/api/tools/invoke" \
  -H "Content-Type: application/json" \
  -H "x-api-key: enso_abc123..." \
  -d '[
    {
      "name": "create_post",
      "args": {
        "title": "My New Agent",
        "body": "This was created by an agent.",
        "userId": 1
      }
    }
  ]'
```

**Response (truncated):**

```json
{
  "tools": [
    {
      "name": "create_post",
      "result": "{\"id\": 101, \"title\": \"My New Agent\", \"body\": \"This was created by an agent.\", \"userId\": 1}",
      ...
    }
  ]
}
```

If you see the created object in the result, your tool is working!

## Step 3: Test LLM Invocation

Now let's verify that an LLM can understand and use this tool. We'll use `/api/llm/invoke` for a stateless interaction.

Since we've already persisted `create_post` in Step 1, we only need to pass the **name** of the tool in the `tools` array. The system will look up the definition for us.

```bash
curl -X POST "https://chat.enso.sh/api/llm/invoke" \
  -H "Content-Type: application/json" \
  -H "x-api-key: enso_abc123..." \
  -d '{
    "model": "openai:gpt-5.2",
    "input": {
      "messages": [
        {"role": "user", "content": "Write a short blog post about AI and publish it."}
      ]
    },
    "tools": ["create_post"]
  }'
```

The model should respond by calling the `create_post` tool with appropriate arguments.

## Step 4: Configure an Assistant

Passing tool names in every request is fine for testing, but for production, we want a persistent **Assistant**.

We'll create an assistant with:

- A snake_case name: `blog_writer_bot`.
- Our `create_post` tool.
- Empty configurations for `mcp`, `a2a`, and `subagents` (just to show they exist).

```bash
curl -X POST "https://chat.enso.sh/api/assistants" \
  -H "Content-Type: application/json" \
  -H "x-api-key: enso_abc123..." \
  -d '{
    "name": "blog_writer_bot",
    "description": "An agent that writes and publishes blogs.",
    "model": "openai:gpt-5.2",
    "system_prompt": "You are a helpful assistant that writes and publishes blog posts.",
    "tools": ["create_post"],
    "mcp": {},
    "a2a": {},
    "subagents": []
  }'
```

**Response:**

```json
{
  "assistant_id": "8e4db28c-be8f-4a44-92e7-b8ccd841d6cc"
}
```

Save that `assistant_id`! It encapsulates all the configuration we just defined.

## Step 5: Run the Agent

Finally, let's interact with our deployed agent. We'll use the `/api/llm/stream` endpoint.

We simply pass the `assistant_id` in the metadata. The backend automatically loads the model, system prompt, and tools.

```bash
curl -X POST "https://chat.enso.sh/api/llm/stream" \
  -H "Content-Type: application/json" \
  -H "x-api-key: enso_abc123..." \
  -d '{
    "input": {
      "messages": [
        {"role": "user", "content": "Publish a post announcing our new feature."}
      ]
    },
    "metadata": {
      "assistant_id": "8e4db28c-be8f-4a44-92e7-b8ccd841d6cc"
    }
  }'
```

You will see a stream of events as the agent:

1.  Reasons about the request.
2.  Calls the `create_post` tool.
3.  Confirms the post was published.

## Step 6: Create a Persistent Thread

Before scheduling the agent, we want to create a **persistent thread**. This acts as a "research workspace" where the agent can maintain context over time, storing files and memories that persist across scheduled runs.

We'll use the `/api/threads` endpoint. We can optionally associate it with our assistant.

```bash
curl -X POST "https://chat.enso.sh/api/threads" \
  -H "Content-Type: application/json" \
  -H "x-api-key: enso_abc123..." \
  -d '{
    "metadata": {
      "assistant_id": "8e4db28c-be8f-4a44-92e7-b8ccd841d6cc",
      "title": "Daily Blog Research"
    }
  }'
```

**Response:**

```json
{
  "thread_id": "2727f69b-8acb-4c8b-a983-29d4fad7e9f5",
  "checkpoint_id": "...",
  "checkpoint_ns": "",
  "assistant_id": "8e4db28c-be8f-4a44-92e7-b8ccd841d6cc"
}
```

Save the `thread_id`! This ID represents the agent's long-term memory for this specific task.

## Step 7: Schedule the Agent

One of the most powerful features of Orchestra is the ability to schedule agents to run autonomously. You can set up a cron job to have your agent perform tasks at regular intervals.

We'll use the `/api/schedules` endpoint to create a new schedule. We provide a `trigger` (using cron syntax) and the `task` payload.

**Crucially, we pass the `thread_id` we just created.** This ensures that every time the agent runs, it has access to the history and files from previous runs, effectively building a growing knowledge base.

```bash
curl -X POST "https://chat.enso.sh/api/schedules" \
  -H "Content-Type: application/json" \
  -H "x-api-key: enso_abc123..." \
  -d '{
    "title": "Daily Blog Post Generator",
    "trigger": {
      "type": "cron",
      "expression": "0 9 * * 1"
    },
    "task": {
      "input": {
        "messages": [
          {"role": "user", "content": "Write and publish a post about the latest AI news."}
        ]
      },
      "metadata": {
        "assistant_id": "8e4db28c-be8f-4a44-92e7-b8ccd841d6cc",
        "thread_id": "2727f69b-8acb-4c8b-a983-29d4fad7e9f5"
      }
    }
  }'
```

This will configure the agent to run every Monday at 9:00 AM inside the "Daily Blog Research" thread. It will autonomously research, write, and publish content, while retaining context from previous weeks.

## Future: DeepAgent File System & Persistent Skills

We are constantly expanding the capabilities of Orchestra agents. We are especially excited about the upcoming **DeepAgent File System**, built on top of `langchain-sandbox`.

Currently, if you want an agent to follow a complex procedure or use a specific dataset, you often have to stuff that information into the system prompt. This consumes context window space and can be expensive.

With the DeepAgent File System, you will be able to:

1.  **Save Scripts as Skills**: Upload Python scripts (e.g., `audit_report.py`) directly to the agent's file system.
2.  **Execute Directly**: The agent can run these scripts in its sandbox environment without needing the code to be part of the prompt.
3.  **Persist Data**: Agents can generate files (reports, charts, logs) that persist across sessions.

This architecture enables "Agent Skills" that are modular, reusable, and token-efficient. It’s a step towards agents that behave more like operating system users—capable of using tools and files natively to get the job done.

## Self-Hosted Deployments

We also recently released our official Docker image for self-hosted deployments! You can pull it directly from our [GitHub Container Registry](https://github.com/enso-labs/orchestra/pkgs/container/orchestra).

Stay tuned for an upcoming blog post where we will dive deep into how to deploy Orchestra on your own infrastructure.

Stay tuned for more updates, and check out our [GitHub repository](https://github.com/enso-labs/orchestra) to get started!

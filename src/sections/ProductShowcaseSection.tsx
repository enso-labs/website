"use client";
import { motion } from "framer-motion";
import VideoPlaceholder from "@/components/placeholders/VideoPlaceholder";
import { MdFolder, MdSmartToy, MdMessage, MdCalendarToday, MdDescription, MdBuild } from "react-icons/md";

const showcaseItems = [
  {
    icon: MdFolder,
    title: "Projects",
    headline: "Context-Aware Document Management",
    description: "Upload documents, web pages, and data sources that your agents can search and reference. Built-in semantic search ensures your AI workforce always has the right context.",
    benefits: [
      "RAG-powered document search",
      "Multiple source types supported",
      "Automatic chunking and embedding",
      "Version-controlled knowledge base"
    ]
  },
  {
    icon: MdSmartToy,
    title: "Assistants",
    headline: "Deep Agents for Production Workloads",
    description: "Build agents designed for long-running, production tasks. Use Python code mode to write and execute scripts directly. Add files for context or create reusable Python tools in the sandbox that integrate with your existing MCP toolsets.",
    benefits: [
      "Python code mode with sandbox execution",
      "File system for context and script reuse",
      "Multi-model support (Claude, GPT, Gemini, Groq)",
      "MCP tools + A2A agent collaboration"
    ]
  },
  {
    icon: MdMessage,
    title: "Threads",
    headline: "Persistent Conversations That Never Forget",
    description: "Every interaction is saved with full context and checkpoints. Resume conversations anytime, rollback to previous states, and maintain continuity across sessions.",
    benefits: [
      "Full conversation history",
      "State checkpoints for time-travel",
      "Multi-turn context retention",
      "Project-scoped threads"
    ]
  },
  {
    icon: MdCalendarToday,
    title: "Schedules",
    headline: "Deep Agents That Run Continuously",
    description: "Schedule your deep agents to run on cron intervals. Agents use the file system to persist context between runs, refine their Python tools over time, and progressively improve at recurring tasks.",
    benefits: [
      "Cron-based recurring execution",
      "File system for cross-run memory",
      "Progressive tool refinement",
      "Execution history and logs"
    ]
  },
  {
    icon: MdDescription,
    title: "Prompts",
    headline: "Reusable Prompt Templates",
    description: "Build a library of templates for both system instructions and user queries. Search your saved prompts instead of retyping. Turn repetitive chat requests into form-based inputs with template variables.",
    benefits: [
      "Templates for system prompts and queries",
      "Searchable prompt library",
      "Form-based inputs via template variables",
      "Public or private sharing"
    ]
  },
  {
    icon: MdBuild,
    title: "Tools",
    headline: "Extensible Capabilities via MCP",
    description: "Connect your agents to the Model Context Protocol ecosystem. Browser automation with Playwright, file system access, web scraping, and custom tool servers.",
    benefits: [
      "Growing MCP server ecosystem",
      "Browser automation (Playwright)",
      "File and system access",
      "Custom tool server support"
    ]
  }
];

export default function ProductShowcaseSection() {
  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-32">
        {showcaseItems.map((item, index) => {
          const isEven = index % 2 === 0;
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-16 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <Icon className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-montserrat font-medium text-purple-300">
                    {item.title}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-cormorant font-semibold text-foreground">
                  {item.headline}
                </h3>

                <p className="text-lg font-montserrat text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-montserrat text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video Placeholder */}
              <div className="flex-1 w-full">
                <VideoPlaceholder title={`${item.title} Demo`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

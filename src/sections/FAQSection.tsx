"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const faqs = [
  {
    question: "What is Orchestra?",
    answer: "Orchestra is an AI agent orchestration platform built on LangGraph. It lets you create, deploy, and manage specialized AI agents that can access tools, collaborate with each other, and automate your workflows. Think of it as the operating system for your AI digital workforce."
  },
  {
    question: "Who should use Orchestra?",
    answer: "Orchestra is perfect for developers, teams, and businesses looking to build AI automation. Whether you're automating customer support, data analysis, content creation, or complex multi-step workflows, Orchestra provides the infrastructure to build reliable AI agents."
  },
  {
    question: "What AI models are supported?",
    answer: "Orchestra supports all major LLM providers including Anthropic Claude, OpenAI GPT, Google Gemini, Groq, xAI Grok, and local models via Ollama. You can mix and match models based on your needs and budget."
  },
  {
    question: "What is MCP and A2A?",
    answer: "MCP (Model Context Protocol) is an open standard that lets AI agents access external tools and data sources. A2A (Agent-to-Agent) enables your agents to communicate and collaborate with each other. Together, they make your agents incredibly powerful and flexible."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. Orchestra runs in your own infrastructure with full data isolation. All conversations and documents are scoped to your account. We use industry-standard encryption and follow best practices for data security."
  },
  {
    question: "How does pricing work?",
    answer: "Orchestra Community is free forever - self-host with full features under the Apache 2.0 license. For enterprises needing managed deployment, SSO, compliance features, and dedicated support, contact us for custom pricing based on your organization's needs."
  },
  {
    question: "Can I self-host Orchestra?",
    answer: "Yes! Orchestra is fully open-source under the Apache 2.0 license. You can self-host today using our Docker images (ghcr.io/ruska-ai/orchestra:latest) or use our managed cloud at chat.ruska.ai. The complete source code is available on GitHub for review, contribution, and customization."
  },
  {
    question: "Do you offer enterprise support?",
    answer: "Yes. For organizations needing managed deployment, SSO integration, compliance features, or dedicated support, we offer enterprise partnerships. We work closely with your team to deploy Orchestra inside your infrastructure and integrate with your existing tools. Contact us to discuss your requirements."
  }
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left hover:text-foreground transition-colors"
      >
        <h3 className="text-lg md:text-xl font-cormorant font-semibold text-foreground">
          {faq.question}
        </h3>
        <MdExpandMore
          className={`w-6 h-6 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <p className="font-montserrat text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cormorant font-light text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-montserrat text-muted-foreground">
            Everything you need to know about Orchestra
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="bg-card rounded-3xl p-6 md:p-8 border border-border">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

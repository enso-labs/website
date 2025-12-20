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
    answer: "During beta, Orchestra is completely free with full feature access. After beta, we'll introduce a simple $9.99/month plan. Beta users will receive special pricing and grandfathered benefits as a thank you for helping us improve the platform."
  },
  {
    question: "Can I self-host Orchestra?",
    answer: "Orchestra will be open-sourced in the near future! For now, we're focused on refining the platform based on user feedback. Use our hosted version at chat.ruska.ai to get started today. Once open-sourced, you'll be able to review the code, contribute, and self-host if needed."
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

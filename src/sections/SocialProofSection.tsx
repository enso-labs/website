"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdCode, MdFlashOn, MdHub } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const techStack = [
  {
    name: "LangGraph",
    description: "Enterprise-grade agent orchestration",
    icon: MdCode
  },
  {
    name: "MCP",
    description: "Model Context Protocol integration",
    icon: MdFlashOn
  },
  {
    name: "A2A",
    description: "Agent-to-Agent communication",
    icon: MdHub
  },
  {
    name: "Developer-First",
    description: "Built for developers, by developers",
    icon: FaGithub
  }
];

export default function SocialProofSection() {
  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cormorant font-light text-foreground mb-6">
            Built on Proven Technology
          </h2>
          <p className="text-xl font-montserrat text-muted-foreground max-w-3xl mx-auto">
            Orchestra is powered by industry-leading frameworks and protocols, giving you enterprise-grade reliability and cutting-edge capabilities.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center shadow-sm"
              >
                <div className="inline-flex p-3 rounded-xl bg-purple-500/10 mb-4">
                  <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-cormorant font-semibold text-card-foreground mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm font-montserrat text-muted-foreground">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-500/20">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-cormorant font-semibold text-foreground mb-3">
                Join Early Adopters Building the Future
              </h3>
              <p className="text-lg font-montserrat text-muted-foreground">
                Be part of the community shaping the next generation of AI automation
              </p>
            </div>
            <div className="flex gap-6 text-center flex-shrink-0">
              <div>
                <div className="text-3xl md:text-4xl font-cormorant font-bold text-foreground">100+</div>
                <div className="text-sm font-montserrat text-muted-foreground">Beta Users</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-3xl md:text-4xl font-cormorant font-bold text-foreground">1000+</div>
                <div className="text-sm font-montserrat text-muted-foreground">Agents Created</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

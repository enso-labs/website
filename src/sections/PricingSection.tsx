"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdCheck, MdRocket, MdBusiness } from "react-icons/md";

const communityFeatures = [
  "Self-hosted deployment",
  "All core features included",
  "Unlimited AI agents",
  "All LLM models supported",
  "MCP & A2A integration",
  "Community support (Discord/GitHub)",
  "Apache 2.0 license"
];

const enterpriseFeatures = [
  "Everything in Community",
  "Managed cloud deployment",
  "SSO/SAML integration",
  "Audit logging & compliance",
  "Priority support & SLA",
  "Custom integrations",
  "Dedicated onboarding"
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-4 bg-background">
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
            Choose Your Deployment
          </h2>
          <p className="text-xl font-montserrat text-muted-foreground max-w-2xl mx-auto">
            Self-host for free or let us manage it for you
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Community Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative h-full p-8 md:p-10 rounded-3xl bg-card border border-border shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-green-500/20">
                  <MdRocket className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-cormorant font-semibold text-foreground">
                  Community
                </h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-cormorant font-bold text-foreground">
                    Free
                  </span>
                  <span className="text-muted-foreground font-montserrat">forever</span>
                </div>
                <p className="text-sm text-muted-foreground font-montserrat">
                  Open-source, self-hosted
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {communityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                      <MdCheck className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="font-montserrat text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="https://github.com/ruska-ai/orchestra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-green-500/50 bg-green-500/10 px-6 py-4 font-montserrat text-base font-medium text-green-400 transition-all duration-200 hover:bg-green-500/20 hover:border-green-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </Link>
            </div>
          </motion.div>

          {/* Enterprise Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full p-8 md:p-10 rounded-3xl bg-card border border-purple-500/30 shadow-xl">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-montserrat font-bold shadow-lg">
                  RECOMMENDED FOR TEAMS
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6 mt-2">
                <div className="p-2 rounded-xl bg-purple-500/20">
                  <MdBusiness className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-cormorant font-semibold text-foreground">
                  Enterprise
                </h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-cormorant font-bold text-foreground">
                    Custom
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-montserrat">
                  Managed deployment & support
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <MdCheck className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="font-montserrat text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="#enterprise"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-4 font-montserrat text-base font-medium text-white transition-all duration-200 hover:opacity-90 shadow-lg"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground font-montserrat text-sm mt-12 max-w-2xl mx-auto"
        >
          Both options include all core orchestration features. Enterprise adds managed infrastructure, security integrations, and dedicated support for production deployments.
        </motion.p>
      </div>
    </section>
  );
}

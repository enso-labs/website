"use client";
import { motion } from "framer-motion";
import RegisterButton from "@/components/buttons/RegisterButton";
import { MdCheck } from "react-icons/md";

const features = [
  "Unlimited AI agents",
  "All features included",
  "All LLM models supported",
  "MCP & A2A integration",
  "Priority support",
  "No credit card required"
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl font-montserrat text-muted-foreground max-w-2xl mx-auto">
            Join the beta for free. Get full access to all features while we perfect the platform.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-2xl">
            {/* Beta Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-montserrat font-bold shadow-lg">
                LIMITED TIME OFFER
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-cormorant font-semibold text-foreground mb-2">
                Beta Access
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-cormorant font-bold text-foreground">
                  FREE
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground font-montserrat">
                <span className="line-through">$9.99/month</span>
                <span className="text-sm">after beta</span>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <MdCheck className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="font-montserrat text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <RegisterButton className="w-full text-lg py-4">
              Start Building Free
            </RegisterButton>

            <p className="text-center text-sm text-muted-foreground font-montserrat mt-6">
              No credit card required • Cancel anytime
            </p>
          </div>
        </motion.div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground font-montserrat text-sm mt-12 max-w-2xl mx-auto"
        >
          Beta access gives you full platform access while we refine Orchestra based on your feedback.
          Lock in your free account before we launch paid tiers.
        </motion.p>
      </div>
    </section>
  );
}

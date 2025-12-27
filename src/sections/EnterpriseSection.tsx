"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdCloud, MdSecurity, MdSettings, MdSupport, MdCheckCircle } from "react-icons/md";

const valueProps = [
  {
    icon: MdCloud,
    title: "Your Infrastructure",
    description: "Deploy on-prem, private cloud, or air-gapped environments. Orchestra runs where your data lives."
  },
  {
    icon: MdSecurity,
    title: "Your Data",
    description: "No data leaves your environment. Full control over storage, processing, and retention policies."
  },
  {
    icon: MdSettings,
    title: "Your Control",
    description: "SSO/SAML integration, role-based access control, and comprehensive audit logging for compliance."
  },
  {
    icon: MdSupport,
    title: "Our Support",
    description: "Dedicated onboarding, SLA-backed support, and ongoing partnership for your AI transformation."
  }
];

export default function EnterpriseSection() {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    size: "",
    useCase: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API endpoint
    console.log("Enterprise inquiry:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="enterprise" className="relative py-24 px-4 bg-gradient-to-b from-background to-purple-500/5">
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
            Enterprise-Ready AI Agent Platform
          </h2>
          <p className="text-xl font-montserrat text-muted-foreground max-w-3xl mx-auto">
            Deploy Orchestra securely inside your organization. We partner with you to integrate with your infrastructure and support your AI transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="p-2 rounded-xl bg-purple-500/20 w-fit mb-4">
                    <prop.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-cormorant font-semibold text-foreground mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-sm font-montserrat text-muted-foreground">
                    {prop.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 p-6 rounded-2xl bg-card/50 border border-border"
            >
              <p className="text-sm font-montserrat text-muted-foreground mb-4">
                Enterprise capabilities include:
              </p>
              <div className="flex flex-wrap gap-3">
                {["SSO/SAML", "Audit Logs", "RBAC", "Air-Gapped Deploy", "Custom SLA"].map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-montserrat bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-10 rounded-3xl bg-card border border-purple-500/20 shadow-xl">
              <h3 className="text-2xl font-cormorant font-semibold text-foreground mb-2">
                Get in Touch
              </h3>
              <p className="text-sm font-montserrat text-muted-foreground mb-8">
                Tell us about your organization and we&apos;ll reach out to discuss how Orchestra can help.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <MdCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-cormorant font-semibold text-foreground mb-2">
                    Thank You!
                  </h4>
                  <p className="text-sm font-montserrat text-muted-foreground">
                    We&apos;ll be in touch within 24 hours to discuss your requirements.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-montserrat text-muted-foreground mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-montserrat text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-montserrat text-muted-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-montserrat text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="size" className="block text-sm font-montserrat text-muted-foreground mb-2">
                      Company Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-montserrat text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select size...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="useCase" className="block text-sm font-montserrat text-muted-foreground mb-2">
                      Tell us about your use case
                    </label>
                    <textarea
                      id="useCase"
                      name="useCase"
                      rows={4}
                      value={formData.useCase}
                      onChange={handleChange}
                      placeholder="What problems are you looking to solve with AI agents?"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-montserrat text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-montserrat font-medium text-base transition-all duration-200 hover:opacity-90 shadow-lg"
                  >
                    Request Demo
                  </button>

                  <p className="text-xs text-center font-montserrat text-muted-foreground">
                    We&apos;ll respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

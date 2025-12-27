"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import RegisterButton from "@/components/buttons/RegisterButton";
import { MdAutoAwesome } from "react-icons/md";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-b from-background via-purple-500/5 to-background dark:from-black dark:via-purple-950/30 dark:to-black px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-900/40 dark:to-blue-900/40 p-12 text-center md:p-16"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/20 px-4 py-2"
            >
              <MdAutoAwesome className="h-5 w-5 text-green-600 dark:text-green-300" />
              <span className="font-montserrat text-sm font-medium text-green-700 dark:text-green-200">
                Open-Source & Enterprise Ready
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-cormorant mb-6 text-4xl font-light text-foreground md:text-5xl lg:text-6xl"
            >
              Ready to Build Your
              <br />
              <span className="text-gold-500">AI Digital Workforce?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-10 max-w-2xl font-montserrat text-xl text-muted-foreground"
            >
              Join hundreds of developers and teams using Orchestra to automate
              their workflows with intelligent AI agents. Self-host for free or
              let us deploy it for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <RegisterButton className="px-10 py-4 text-lg">
                Start Building Free
              </RegisterButton>
              <Link
                href="#enterprise"
                className="inline-flex items-center justify-center rounded-xl border border-gray-600 px-10 py-4 font-montserrat text-lg font-medium text-foreground transition-all duration-200 hover:bg-gray-800/50 hover:border-gray-500"
              >
                Talk to Sales
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 font-montserrat text-sm text-muted-foreground"
            >
              Apache 2.0 License • Self-Host or Cloud • Enterprise Support Available
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

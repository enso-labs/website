"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import RegisterButton from "@/components/buttons/RegisterButton";
import VideoPlaceholder from "@/components/placeholders/VideoPlaceholder";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808024_1px,transparent_1px),linear-gradient(to_bottom,#80808024_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      {/* Content Container */}
      <div className="relative flex flex-1 items-center justify-center px-4 py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Logo (small, top) */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative h-16 w-16">
                  <Image
                    src="/images/logo-bg.png"
                    alt="Orchestra Logo"
                    fill
                    priority
                    className="rounded-full object-contain"
                  />
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-cormorant mb-6 text-5xl font-light leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Lean Into the{" "}
                <span className="font-space font-bold text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                  Singularity
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mx-auto mb-8 max-w-xl font-montserrat text-xl font-light leading-relaxed text-muted-foreground md:text-2xl lg:mx-0">
                Create intelligent agents that automate workflows, search
                documents, and collaborate with each other—all powered by
                LangGraph Deep Agents.
              </p>

              {/* CTAs */}
              <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <RegisterButton className="px-10 py-4 text-lg">
                  Start Building Free
                </RegisterButton>
              </div>

              {/* Socials Link */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <a
                  href="/socials"
                  className="inline-flex items-center gap-2 font-montserrat text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  <span>Follow us on Social Media</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 font-montserrat text-sm text-gray-500 lg:justify-start">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Free beta</span>
                </div>
                <span className="text-gray-700">•</span>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No credit card</span>
                </div>
                <span className="text-gray-700">•</span>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Full access</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Product Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Glow effect behind the demo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />

              {/* Demo Container */}
              <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
                <VideoPlaceholder
                  title="See Orchestra in Action"
                  className="rounded-2xl border-0"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 hidden rounded-xl border border-gray-800 bg-gray-900/90 px-4 py-3 shadow-lg backdrop-blur-sm md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="font-montserrat text-sm text-gray-300">
                    100+ agents deployed
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-4 -top-4 hidden rounded-xl border border-gray-800 bg-gray-900/90 px-4 py-3 shadow-lg backdrop-blur-sm md:block"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="font-montserrat text-sm text-gray-300">
                    Powered by LangChain DeepAgents
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex justify-center pb-8"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-montserrat text-xs uppercase tracking-wider text-gray-600">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

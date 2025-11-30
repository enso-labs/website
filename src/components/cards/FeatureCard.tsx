"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  onClick?: () => void;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  onClick
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 ${onClick ? "cursor-pointer hover:scale-105" : ""}`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
          <Icon className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-xl font-cormorant font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm font-montserrat text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

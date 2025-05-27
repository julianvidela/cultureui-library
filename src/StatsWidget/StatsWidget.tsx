"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface StatsWidgetProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: string;
  status?: "positive" | "negative" | "neutral";
  description?: string;
  className?: string;
  bgCard?:string;
}

export const StatsWidget: React.FC<StatsWidgetProps> = ({
  title,
  value,
  icon,
  change,
  status = "neutral",
  description,
  className,
  bgCard
}) => {
  const statusColor = {
    positive: "text-green-500 bg-green-500/10",
    negative: "text-red-500 bg-red-500/10",
    neutral: "text-zinc-400 bg-zinc-700/30",
  };

  const statusIcon = {
    positive: <ArrowUpRight size={14} />,
    negative: <ArrowDownRight size={14} />,
    neutral: null,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={clsx(
        `p-5 rounded-xl  border border-[var(--border-primary)]  shadow-md flex flex-col gap-3 w-full max-w-sm`,
        className 
      )}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-zinc-400 font-medium">{title}</span>
          <span className="text-2xl font-bold text-white">{value}</span>
        </div>
        {icon && (
          <div className="bg-zinc-800 text-white p-2 rounded-full shadow-sm">
            {icon}
          </div>
        )}
      </div>

      {(change || description) && (
        <div className="flex items-center gap-2 text-sm">
          {change && (
            <span
              className={clsx(
                "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
                statusColor[status]
              )}
            >
              {statusIcon[status]}
              {change}
            </span>
          )}
          {description && (
            <span className="text-zinc-400">{description}</span>
          )}
        </div>
      )}
    </motion.div>
  );
};

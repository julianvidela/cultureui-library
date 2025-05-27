"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SocialItem {
  id: string;
  icon: React.ReactNode;
  label?: string;
  username?: string;
  description?: string;
  href: string;
  color?: string;
}

interface SocialSelectorProps {
  items: SocialItem[];
  onChange?: (selected: string) => void;
  className?: string;
  variant?: "default" | "colored";
  iconSize?: number;
  iconPadding?: string;
  textColor?: string;
  activeBgColor?: string;
  border?: boolean;
}

export const SocialSelector: React.FC<SocialSelectorProps> = ({
  items,
  onChange,
  className,
  variant = "default",
  iconSize = 24,
  iconPadding = "p-3",
  textColor = "text-zinc-300",
  activeBgColor = "bg-zinc-800",
  border = false,
}) => {
  const [selected, setSelected] = useState<string>(items[0]?.id || "");

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(id);
  };

  const selectedItem = items.find((item) => item.id === selected);
  if (!selectedItem) return null;

  return (
    <div className={clsx("flex flex-col items-center gap-4", className)}>
   
      <div className="flex gap-4 items-center justify-center relative">
        {items.map(({ id, icon, color }) => {
          const isActive = selected === id;
          return (
            <div key={id} className="flex flex-col items-center">
              <div className="relative group">
                <button
                  onClick={() => handleSelect(id)}
                  className={clsx("relative z-10 rounded-full focus:outline-none", iconPadding)}
                  aria-label={id}
                >
                  {isActive && (
                    <motion.div
                      layoutId="bg-circle"
                      className={clsx(
                        "absolute inset-0 rounded-full -z-10",
                        variant === "colored" ? color : activeBgColor,
                        border ? "border border-[var(--border-primary)]" : ""
                      )}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="text-white">{icon}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

     
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm text-[var(--text-color-primary)]">{selectedItem.description}</p>
        <a
          href={selectedItem.href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx("text-base font-semibold", textColor, "text-[var(--text-color-secondary)]")}
        >
          {selectedItem.username}
        </a>
      </div>
    </div>
  );
};

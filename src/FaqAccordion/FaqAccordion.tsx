"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  data: FAQItem[];
  width?: string;
  questionColor?: string;
  answerColor?: string;
  questionSize?: string;
  answerSize?: string;
  questionWeight?: string;
  answerWeight?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  data,
  width = "max-w-2xl",
  questionColor = "#808080",
  answerColor = "#fff",
  questionSize = "14px",
  answerSize = "14px",
  questionWeight = "600",
  answerWeight = "600",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={clsx("w-full mx-auto mb-10", width)}>
      {data.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-t border-[var(--border-primary)] overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-5 text-left transition-colors duration-300 bg-transparent border-none cursor-pointer"
              style={{
                color: questionColor,
                fontSize: questionSize,
                fontWeight: questionWeight,
              }}
            >
              {faq.question}
              <ChevronDown
                className="w-5 h-5 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="pb-6 w-[95%]"
                style={{
                  color: answerColor,
                  fontSize: answerSize,
                  fontWeight: answerWeight,
                }}
              >
                {faq.answer}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};



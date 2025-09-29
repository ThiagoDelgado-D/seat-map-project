"use client";

import { FAQItem } from "@/constants/faq";
import { DefaultProps } from "@/utils/components";
import { clx } from "@/utils/styles";
import { useState } from "react";

export interface FAQSectionProps extends DefaultProps {
  title?: string;
  questions?: FAQItem[];
  id?: string;
}

export function FAQSection({
  className,
  title = "Frequently Asked Questions",
  questions = [],
  id,
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section
      id={id}
      className={clx(
        "w-full py-16 sm:py-20 lg:py-24 bg-white",
        className
      )}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  <svg
                    className={clx(
                      "w-5 h-5 text-gray-500 transition-transform duration-200",
                      openItems.has(item.id) && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openItems.has(item.id) && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
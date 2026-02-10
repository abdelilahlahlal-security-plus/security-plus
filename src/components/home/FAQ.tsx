"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SanityFaq } from "@/lib/sanity";

type FAQProps = {
    faqs: SanityFaq[];
};

export function FAQ({ faqs }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-50 dark:bg-neutral-950 transition-colors">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-primary dark:text-primary-light font-bold tracking-wide uppercase text-sm mb-2">FAQ</h2>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Questions Fréquentes</h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq._id}
                            className={cn(
                                "bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border transition-all duration-200",
                                openIndex === index ? "border-primary/50 shadow-md" : "border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-gray-600"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={cn("font-bold text-lg", openIndex === index ? "text-primary dark:text-primary-light" : "text-gray-900 dark:text-white")}>
                                    {faq.question}
                                </span>
                                <span className={cn("p-1 rounded-full bg-gray-100 dark:bg-neutral-800 transition-colors", openIndex === index ? "bg-primary text-white dark:bg-primary-light dark:text-gray-900" : "text-gray-500 dark:text-gray-400")}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-neutral-800 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

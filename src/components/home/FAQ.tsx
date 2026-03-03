"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SanityPageHome } from "@/lib/sanity";

const defaultFaqs = [
    {
        question: "Quelle est votre zone d'intervention ?",
        answer: "Nous intervenons principalement en Nouvelle-Aquitaine, avec une forte présence dans un rayon de 50 km autour de Bordeaux (Mérignac, Pessac, Bègles, etc.). Pour des missions spécifiques ou de longue durée, nous pouvons étudier des déploiements plus larges."
    },
    {
        question: "Vos agents sont-ils certifiés ?",
        answer: "Absolument. 100% de nos agents de sécurité détiennent une carte professionnelle active délivrée par le CNAPS (Conseil National des Activités Privées de Sécurité). Ils sont également formés au secourisme (SST) et suivent des mises à niveau régulières."
    },
    {
        question: "Proposez-vous des agents de sécurité incendie (SSIAP) ?",
        answer: "Oui, nous disposons d'agents qualifiés SSIAP 1, SSIAP 2 (Chefs d'équipe) et SSIAP 3 (Chefs de service) pour assurer la sécurité incendie de vos Établissements Recevant du Public (ERP) ou Immeubles de Grande Hauteur (IGH)."
    },
    {
        question: "Quel est le délai de mise en place d'une prestation ?",
        answer: "Notre force est la réactivité. Pour une urgence (intrusion, panne système, sinistre), nous pouvons déployer un agent sous 2 à 4 heures. Pour des contrats planifiés, nous mettons en place le dispositif sous 24 à 48 heures après validation du devis."
    },
    {
        question: "Intervenez-vous pour les particuliers ?",
        answer: "Tout à fait. Nous proposons des services de surveillance pour les résidences privées (vacances, absences prolongées) ainsi que la sécurisation d'événements privés (mariages, réceptions)."
    },
    {
        question: "Comment obtenir un devis personnalisé ?",
        answer: "Vous pouvez effectuer une demande de devis gratuitement via notre formulaire en ligne 'Devis', ou nous contacter directement par téléphone au 05 56 44 02 79. Nous nous engageons à vous répondre sous 24h ouvrées."
    }
];

interface FAQProps {
    data?: SanityPageHome | null;
}

export function FAQ({ data }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = data?.faqs?.length ? data.faqs : defaultFaqs;

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
                            key={index}
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

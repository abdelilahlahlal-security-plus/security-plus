import { Award, Clock, MapPin, ClipboardCheck } from "lucide-react";
import * as Icons from "lucide-react";
import type { SanityPageHome } from "@/lib/sanity";

const defaultFeatures = [
    {
        title: "Agents Certifiés & Qualifiés",
        description: "Tous nos agents détiennent une carte professionnelle CNAPS valide et suivent une formation continue rigoureuse.",
        iconName: "Award",
    },
    {
        title: "Réactivité 24h/7j",
        description: "Notre permanence opérationnelle assure une prise en compte immédiate de vos besoins et une intervention rapide.",
        iconName: "Clock",
    },
    {
        title: "Ancrage Local Aquitaine",
        description: "Basés à Bordeaux, nous intervenons dans un rayon de 50km, garantissant une proximité réelle avec nos clients.",
        iconName: "MapPin",
    },
    {
        title: "Processus Qualité",
        description: "Des procédures strictes et un encadrement permanent pour assurer une prestation de haute qualité.",
        iconName: "ClipboardCheck",
    },
];

interface FeaturesProps {
    data?: SanityPageHome | null;
}

export function Features({ data }: FeaturesProps) {
    const features = data?.features?.length ? data.features : defaultFeatures;

    return (
        <section className="py-24 bg-primary dark:bg-neutral-950 text-white overflow-hidden relative transition-colors">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-accent font-bold tracking-wide uppercase text-sm mb-2">
                            {data?.featuresSubtitle || "Pourquoi Security Plus ?"}
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {data?.featuresTitle || "L'excellence opérationnelle au service de votre sérénité"}
                        </h3>
                        <p className="text-blue-100 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                            {data?.featuresDescription || "Depuis 2017, nous bâtissons une relation de confiance avec nos clients en Nouvelle-Aquitaine grâce à notre rigueur et notre professionnalisme sans faille."}
                        </p>

                        <div className="p-6 bg-white/10 dark:bg-neutral-900 rounded-xl backdrop-blur-sm border border-white/10 dark:border-neutral-800">
                            <span className="block text-4xl font-bold text-accent mb-2">
                                {data?.featuresStatValue || "100%"}
                            </span>
                            <span className="text-blue-100 dark:text-gray-400">
                                {data?.featuresStatLabel || "De nos agents sont agréés par le CNAPS (Conseil National des Activités Privées de Sécurité)."}
                            </span>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature) => {
                            const IconComponent = (Icons as any)[feature.iconName || "Award"] || Award;
                            return (
                                <div
                                    key={feature.title}
                                    className="bg-white/5 dark:bg-neutral-900 p-6 rounded-xl hover:bg-white/10 dark:hover:bg-neutral-800 transition-colors border border-white/5 dark:border-neutral-800"
                                >
                                    <IconComponent className="h-10 w-10 text-accent mb-4" />
                                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                    <p className="text-blue-100/80 dark:text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

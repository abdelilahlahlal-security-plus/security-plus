import { Shield, Flame, UserX, Car, Dog, Calendar } from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";
import type { SanityPageHome } from "@/lib/sanity";

const defaultServices = [
    {
        title: "Gardiennage",
        description: "Surveillance humaine de sites industriels, tertiaires et commerciaux. Contrôle d'accès et rondes de sécurité.",
        iconName: "Shield",
        href: "/nos-prestations#gardiennage",
        color: "bg-blue-500",
    },
    {
        title: "Sécurité Incendie (SSIAP)",
        description: "Agents SSIAP 1, 2 et 3 pour la prévention et l'intervention incendie dans les ERP et IGH.",
        iconName: "Flame",
        href: "/nos-prestations#ssiap",
        color: "bg-orange-500",
    },
    {
        title: "Sûreté & Prévol",
        description: "Lutte contre la démarque inconnue et les vols en magasin. Agents arrière-caisse et inspecteurs.",
        iconName: "UserX",
        href: "/nos-prestations#prevol",
        color: "bg-purple-500",
    },
    {
        title: "Sécurité Mobile",
        description: "Rondes d'ouverture et de fermeture, interventions sur alarme avec véhicules géolocalisés.",
        iconName: "Car",
        href: "/nos-prestations#mobile",
        color: "bg-green-500",
    },
    {
        title: "Agent Cynophile",
        description: "Binôme homme-chien pour la dissuasion et la protection de sites sensibles ou grands espaces.",
        iconName: "Dog",
        href: "/nos-prestations#cynophile",
        color: "bg-yellow-600",
    },
    {
        title: "Sécurité Événementielle",
        description: "Gestion de foule, palpation et sécurisation pour vos concerts, festivals et manifestations sportives.",
        iconName: "Calendar",
        href: "/nos-prestations#event",
        color: "bg-red-500",
    },
];

interface ServicesGridProps {
    data?: SanityPageHome | null;
}

export function ServicesGrid({ data }: ServicesGridProps) {
    const services = data?.services?.length ? data.services : defaultServices;

    return (
        <section className="py-20 bg-white dark:bg-neutral-950">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-primary dark:text-primary-light font-bold tracking-wide uppercase text-sm mb-2">
                        {data?.servicesSubtitle || "Nos Expertises"}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {data?.servicesTitle || "Des solutions de sécurité adaptées à vos besoins"}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        {data?.servicesDescription || "Nous déployons des stratégies de protection sur mesure pour garantir la sûreté de vos biens et de vos collaborateurs."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const IconComponent = (Icons as any)[service.iconName || "Shield"] || Shield;
                        return (
                            <Link
                                key={service.title}
                                href={service.href || "#"}
                                className="group relative bg-gray-50 dark:bg-neutral-900 rounded-2xl p-8 transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-neutral-800"
                            >
                                <div className={`inline-flex p-3 rounded-lg text-white mb-6 ${service.color || 'bg-blue-500'} shadow-lg shadow-opacity-20`}>
                                    <IconComponent size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <span className="text-primary dark:text-primary-light font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    En savoir plus &rarr;
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import Link from "next/link";
import { Factory, HardHat, Stethoscope, Hotel, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { SanityPageHome } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

const defaultSectors = [
    {
        name: "Industrie & Logistique",
        description: "Sécurisation des sites de production, entrepôts et zones de fret. Contrôle des flux et prévention des risques.",
        iconName: "Factory",
        image: "/images/sector-industry.png",
    },
    {
        name: "BTP & Chantier",
        description: "Surveillance de chantiers, protection contre le vol de matériaux et d'engins, prévention des intrusions.",
        iconName: "HardHat",
        image: "/images/sector-btp.png",
    },
    {
        name: "Santé & Hôpitaux",
        description: "Sécurité des établissements de soin, gestion des flux patients/visiteurs, sécurité incendie.",
        iconName: "Stethoscope",
        image: "/images/sector-health.png",
    },
    {
        name: "Hôtellerie & Luxe",
        description: "Accueil sécurisé, discrétion et surveillance pour hôtels, résidences de prestige et événements VIP.",
        iconName: "Hotel",
        image: "/images/sector-hotel.png",
    },
];

interface SectorsProps {
    data?: SanityPageHome | null;
}

export function Sectors({ data }: SectorsProps) {
    const sectors = data?.sectors?.length
        ? data.sectors.map(s => ({
            ...s,
            image: s.image ? urlFor(s.image).url() : "/images/hero-bg.png",
        }))
        : defaultSectors;

    return (
        <section className="py-20 bg-gray-50 dark:bg-neutral-950 transition-colors">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-primary dark:text-primary-light font-bold tracking-wide uppercase text-sm mb-2">
                            {data?.sectorsSubtitle || "Secteurs d'Activité"}
                        </h2>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {data?.sectorsTitle || "Nous protégeons tous les environnements"}
                        </h3>
                    </div>
                    <Link href="/secteurs-activites" className="hidden md:flex items-center text-primary dark:text-primary-light font-semibold hover:text-primary-light dark:hover:text-white group">
                        Voir tous nos secteurs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectors.map((sector) => {
                        const IconComponent = (Icons as any)[sector.iconName || "Factory"] || Factory;
                        return (
                            <div key={sector.name} className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                                <Image
                                    src={sector.image}
                                    alt={sector.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="mb-3 text-white/90">
                                        <IconComponent size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{sector.name}</h4>
                                    <p className="text-sm text-gray-300 line-clamp-3 group-hover:line-clamp-none transition-all">
                                        {sector.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/secteurs-activites" className="inline-flex items-center text-primary font-semibold hover:text-primary-light">
                        Voir tous nos secteurs <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

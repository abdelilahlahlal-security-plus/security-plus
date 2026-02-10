import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SanitySector } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { getIconByName } from "@/lib/iconMap";

type SectorsProps = {
    sectors: SanitySector[];
};

export function Sectors({ sectors }: SectorsProps) {
    return (
        <section className="py-20 bg-gray-50 dark:bg-neutral-950 transition-colors">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-primary dark:text-primary-light font-bold tracking-wide uppercase text-sm mb-2">Secteurs d&apos;Activité</h2>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Nous protégeons tous les environnements</h3>
                    </div>
                    <Link href="/services" className="hidden md:flex items-center text-primary dark:text-primary-light font-semibold hover:text-primary-light dark:hover:text-white group">
                        Voir tous nos secteurs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectors.map((sector) => {
                        const Icon = getIconByName(sector.icon);
                        const imageUrl = sector.image
                            ? urlFor(sector.image).width(600).height(800).quality(80).url()
                            : "/images/placeholder.png";

                        return (
                            <div key={sector._id} className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                                <Image
                                    src={imageUrl}
                                    alt={sector.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="mb-3 text-white/90">
                                        <Icon size={32} />
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
                    <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary-light">
                        Voir tous nos secteurs <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

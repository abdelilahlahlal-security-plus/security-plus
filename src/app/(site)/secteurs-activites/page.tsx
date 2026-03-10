import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Factory, HardHat, Stethoscope, Hotel, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Secteurs d'Activité - Security Plus",
    description:
        "Découvrez les secteurs d'activité couverts par Security Plus : industrie, BTP, santé, hôtellerie, commerce, événementiel et bien plus.",
};

const sectors = [
    {
        name: "Industrie & Logistique",
        slug: "industrie-logistique",
        iconName: "Factory",
        shortDescription:
            "Sécurisation des sites de production, entrepôts et zones de fret.",
        description:
            "Les sites industriels et logistiques représentent des enjeux majeurs en matière de sécurité : protection des marchandises, contrôle des flux de véhicules et de personnel, prévention des intrusions et des actes de malveillance. Chez Security Plus, nous déployons des agents qualifiés, formés aux spécificités de chaque environnement industriel.",
        features: [
            "Gardiennage 24h/24 et rondes de surveillance",
            "Contrôle d'accès véhicules et piétons",
            "Prévention du vol et de la démarque",
            "Gestion des flux sur plateformes logistiques",
            "Surveillance des zones sensibles (stockage, quais)",
            "Rondes mobiles géolocalisées",
        ],
        image: "/images/sector-industry.png",
    },
    {
        name: "BTP & Chantier",
        slug: "btp-chantier",
        iconName: "HardHat",
        shortDescription:
            "Surveillance de chantiers, protection contre le vol de matériaux et d'engins.",
        description:
            "Les chantiers de construction sont particulièrement vulnérables au vol de matériaux, d'engins et de câbles, surtout en dehors des heures ouvrées. Security Plus assure une surveillance continue et dissuasive pour protéger vos investissements et garantir la continuité de vos travaux.",
        features: [
            "Surveillance de nuit et week-end",
            "Protection contre le vol de matériaux et engins",
            "Contrôle d'accès aux zones de chantier",
            "Rondes de prévention incendie",
            "Agent cynophile pour dissuasion renforcée",
            "Rapports d'intervention quotidiens",
        ],
        image: "/images/sector-btp.png",
    },
    {
        name: "Santé & Hôpitaux",
        slug: "sante-hopitaux",
        iconName: "Stethoscope",
        shortDescription:
            "Sécurité des établissements de soin, gestion des flux patients/visiteurs.",
        description:
            "Les établissements de santé (hôpitaux, cliniques, EHPAD) nécessitent une sécurité adaptée, alliant fermeté et bienveillance. Nos agents sont formés à la gestion de situations sensibles : urgences psychiatriques, gestion des visiteurs agressifs, sécurité incendie SSIAP.",
        features: [
            "Agents SSIAP pour la sécurité incendie",
            "Filtrage et accueil des visiteurs",
            "Gestion des situations d'urgence",
            "Surveillance des parkings et accès",
            "Rondes intérieures et extérieures",
            "Accompagnement du personnel soignant",
        ],
        image: "/images/sector-health.png",
    },
    {
        name: "Hôtellerie & Luxe",
        slug: "hotellerie-luxe",
        iconName: "Hotel",
        shortDescription:
            "Accueil sécurisé, discrétion et surveillance pour hôtels et résidences de prestige.",
        description:
            "Dans le secteur de l'hôtellerie et du luxe, la sécurité doit être invisible mais efficace. Nos agents allient professionnalisme, discrétion et sens de l'accueil pour garantir la sérénité de vos clients et la protection de vos établissements.",
        features: [
            "Accueil et filtrage discret",
            "Surveillance des espaces communs",
            "Protection rapprochée VIP",
            "Gestion des événements privés",
            "Rondes de sûreté nocturnes",
            "Coordination avec les équipes hôtelières",
        ],
        image: "/images/sector-hotel.png",
    },
    {
        name: "Commerce & Grande Distribution",
        slug: "commerce-distribution",
        iconName: "ShoppingCart",
        shortDescription:
            "Lutte contre la démarque inconnue et sécurisation des espaces commerciaux.",
        description:
            "La sécurité en milieu commercial est un levier de performance : réduction de la démarque inconnue, gestion des incivilités et protection des collaborateurs. Nos agents spécialisés en prévol et sûreté assurent une présence dissuasive et professionnelle.",
        features: [
            "Agents de prévention vol (prévol)",
            "Surveillance vidéo et arrière-caisse",
            "Contrôle des sacs et palpations",
            "Gestion des conflits et incivilités",
            "Interpellation dans le cadre légal",
            "Rapports et statistiques de démarque",
        ],
        image: "/images/hero-bg.png",
    },
    {
        name: "Événementiel",
        slug: "evenementiel",
        iconName: "PartyPopper",
        shortDescription:
            "Sécurisation de festivals, concerts, salons et événements d'entreprise.",
        description:
            "Security Plus intervient sur tout type d'événement : concerts, festivals, salons professionnels, soirées d'entreprise et manifestations sportives. Nous assurons la sécurité des participants tout en garantissant une expérience fluide et agréable.",
        features: [
            "Accueil et palpation de sécurité",
            "Gestion de foule et flux",
            "Sécurisation des accès VIP et backstage",
            "Équipes cynophiles de détection",
            "Coordination avec les forces de l'ordre",
            "Plan de sécurité sur mesure",
        ],
        image: "/images/hero-bg.png",
    },
];

export default function SecteursActivitesPage() {
    return (
        <>
            {/* Hero Header */}
            <section className="relative py-20 bg-primary dark:bg-neutral-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />
                <div className="container-custom relative z-10">
                    <p className="text-primary-light dark:text-primary-light font-semibold tracking-wide uppercase text-sm mb-3">
                        Secteurs d&apos;Activité
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
                        Nous protégeons tous les environnements
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        De l&apos;industrie à l&apos;événementiel, Security Plus déploie des solutions de sécurité
                        adaptées aux exigences spécifiques de chaque secteur d&apos;activité.
                    </p>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-20 bg-white dark:bg-neutral-950">
                <div className="container-custom">
                    <div className="grid gap-16">
                        {sectors.map((sector, index) => {
                            const IconComponent =
                                (Icons as any)[sector.iconName] || Factory;
                            const isEven = index % 2 === 0;

                            return (
                                <article
                                    key={sector.slug}
                                    id={sector.slug}
                                    className="scroll-mt-24"
                                >
                                    <div
                                        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                                    >
                                        {/* Image */}
                                        <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group">
                                            <Image
                                                src={sector.image}
                                                alt={sector.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-xl p-3">
                                                <IconComponent
                                                    size={28}
                                                    className="text-white"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="w-full lg:w-1/2">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                                                    <IconComponent
                                                        size={20}
                                                        className="text-primary dark:text-primary-light"
                                                    />
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                                    {sector.name}
                                                </h2>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                                                {sector.description}
                                            </p>

                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                {sector.features.map((feature) => (
                                                    <li
                                                        key={feature}
                                                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                                                    >
                                                        <ShieldCheck
                                                            size={18}
                                                            className="text-accent mt-0.5 flex-shrink-0"
                                                        />
                                                        <span className="text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link
                                                href="/devis"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors"
                                            >
                                                Demander un devis
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Separator */}
                                    {index < sectors.length - 1 && (
                                        <hr className="mt-16 border-gray-200 dark:border-neutral-800" />
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary dark:bg-neutral-900 text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-4">
                        Votre secteur n&apos;est pas listé ?
                    </h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Nous développons des solutions sur mesure pour tous les
                        environnements. Contactez-nous pour discuter de vos besoins
                        spécifiques.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors"
                    >
                        Contactez-nous
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </>
    );
}

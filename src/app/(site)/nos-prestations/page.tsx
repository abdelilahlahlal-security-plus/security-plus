import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Shield, Flame, UserX, Car, Dog, Calendar, Check } from "lucide-react";
import * as Icons from "lucide-react";
import { getPagePrestations, urlFor } from "@/lib/sanity";
import { Metadata } from "next";

const defaultServices = [
    {
        id: "gardiennage",
        title: "Gardiennage & Surveillance Humaine",
        icon: Shield,
        image: "/images/service-gardiennage.png",
        content: "La surveillance humaine est le cœur de notre métier. Nos agents de sécurité qualifiés assurent la protection de vos biens et des personnes par une présence dissuasive et active.",
        features: [
            "Contrôle d'accès et filtrage",
            "Rondes de surveillance (périphériques et intérieures)",
            "Gestion des clés et badges",
            "Tenue de main courante",
            "Ouverture et fermeture de sites"
        ]
    },
    {
        id: "ssiap",
        title: "Sécurité Incendie (SSIAP)",
        icon: Flame,
        image: "/images/service-ssiap.png",
        content: "Nos agents de sécurité incendie (SSIAP 1, 2, 3) sont formés pour prévenir les risques d'incendie et intervenir rapidement en cas de sinistre dans les ERP et IGH.",
        features: [
            "Prévention des incendies",
            "Sensibilisation du personnel",
            "Entretien élémentaire des moyens de secours",
            "Alerte et accueil des secours",
            "Évacuation du public"
        ]
    },
    {
        id: "prevol",
        title: "Sûreté & Prévol",
        icon: UserX,
        image: "/images/service-prevol.png",
        content: "Spécialistes de la grande distribution et des commerces, nos agents pré-vol luttent efficacement contre la démarque inconnue et les vols à l'étalage.",
        features: [
            "Surveillance des rayons",
            "Arrière-caisse",
            "Vidéoprotection",
            "Interpellation dans le respect du cadre légal",
            "Rédaction de rapports"
        ]
    },
    {
        id: "mobile",
        title: "Sécurité Mobile",
        icon: Car,
        image: "/images/service-mobile.png",
        content: "Pour les sites ne nécessitant pas une présence permanente, nos patrouilles mobiles effectuent des rondes aléatoires ou programmées pour vérifier l'intégrité de vos locaux.",
        features: [
            "Rondes de dissuasion",
            "Intervention sur alarme 24h/7j",
            "Levée de doute physique",
            "Véhicules géolocalisés",
            "Rapports électroniques en temps réel"
        ]
    },
    {
        id: "cynophile",
        title: "Agent Cynophile (Maître Chien)",
        icon: Dog,
        image: "/images/service-cynophile.png",
        content: "Le binôme agent de sécurité et chien offre une capacité de dissuasion et de détection supérieure, idéale pour les grands espaces, parkings ou sites sensibles.",
        features: [
            "Dissuasion renforcée",
            "Détection d'intrusion",
            "Protection de sites industriels",
            "Surveillance de nuit",
            "Défense du poste"
        ]
    },
    {
        id: "event",
        title: "Sécurité Événementielle",
        icon: Calendar,
        image: "/images/service-event.png",
        content: "Nous sécurisons vos événements (concerts, foires, événements sportifs, soirées d'entreprise) en gérant les flux et en assurant la sécurité des participants.",
        features: [
            "Accueil et palpation de sécurité",
            "Gestion de foule",
            "Sécurisation des accès VIP",
            "Surveillance de la scène et des loges",
            "Gestion des conflits"
        ]
    }
];

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPagePrestations();
    const title = page?.seo?.title || "Nos Prestations - Security Plus | Gardiennage et Sécurité à Bordeaux";
    const description = page?.seo?.description || "Découvrez nos services de sécurité privée : gardiennage, sécurité incendie (SSIAP), cynophile, ronde mobile et événementiel en Nouvelle-Aquitaine.";
    const ogImage = page?.seo?.image ? urlFor(page.seo.image).width(1200).height(630).url() : null;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: ogImage ? [{ url: ogImage }] : [],
            type: 'website',
        },
        robots: page?.seo?.noIndex ? 'noindex, nofollow' : 'index, follow',
    }
}

export default async function ServicesPage() {
    const data = await getPagePrestations();

    const servicesToDisplay = data?.prestations?.length ? data.prestations.map(s => ({
        id: s.id,
        title: s.title,
        content: s.content || s.description,
        icon: (Icons as any)[s.iconName || "Shield"] || Shield,
        image: s.image ? urlFor(s.image).url() : "/images/hero-bg.png",
        features: s.features || []
    })) : defaultServices;

    return (
        <>
            <PageHeader
                title={data?.headerTitle || "Nos Prestations"}
                description={data?.headerDescription || "Une gamme complète de solutions de sécurité pour répondre à chacune de vos problématiques."}
                image={data?.headerImage ? urlFor(data.headerImage).url() : undefined}
            />

            <div className="container-custom py-20">
                <div className="space-y-24">
                    {servicesToDisplay.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <section
                                key={service.id}
                                id={service.id}
                                className={`scroll-mt-28 grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
                            >
                                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                                    <div className="inline-flex p-3 rounded-xl bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light mb-6">
                                        <IconComponent size={40} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
                                        {service.content}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Check className="text-success h-6 w-6 shrink-0 mt-0.5" />
                                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/devis?service=${service.id}`}>
                                        <Button>Demander un devis pour ce service</Button>
                                    </Link>
                                </div>

                                <div className={`relative rounded-2xl h-[400px] w-full overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>

            <section className="bg-primary py-16 text-center text-white">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-4">{data?.ctaTitle || "Un besoin spécifique ?"}</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        {data?.ctaDescription || "Nous développons des solutions sur mesure pour les secteurs de l'industrie, de la logistique, du tertiaire et de la santé."}
                    </p>
                    <Link href="/contact">
                        <Button variant="secondary" size="lg">{data?.ctaButtonText || "Contactez-nous"}</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'
import crypto from 'crypto'

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01',
    token: process.env.SANITY_API_TOKEN,
})

// Sanity requires _key on array items of type 'object'
function key() {
    return crypto.randomBytes(6).toString('hex')
}

const seedData = [
    // 1. Settings
    {
        _id: 'settings',
        _type: 'settings',
        siteTitle: 'Security Plus',
        description: 'Agence de sécurité privée à Bordeaux (33). Gardiennage, Sécurité Incendie (SSIAP), Cynophile, Événementiel et Ronde. Intervention 24h/7j en Gironde.',
        headerLogo: { _type: 'image', asset: { _type: 'reference', _ref: 'image-df9a632047fc5a0364f9b8832a8264d14217112b-200x200-png' } }, // Reusing existing logo ref
        footerLogo: { _type: 'image', asset: { _type: 'reference', _ref: 'image-df9a632047fc5a0364f9b8832a8264d14217112b-200x200-png' } },
        cnaps: 'AUT-033-2119-05-23-20200742416',
        phone: '05 56 44 02 79',
        email: 'contact@security-plus.fr',
        address: '123 Avenue de la République, 33000 Bordeaux',
        navigation: [
            { _key: key(), name: 'Accueil', href: '/' },
            { _key: key(), name: 'Nos Prestations', href: '/nos-prestations' },
            { _key: key(), name: 'Qui sommes-nous', href: '/qui-sommes-nous' },
            { _key: key(), name: 'Recrutement', href: '/recrutement' },
            { _key: key(), name: 'Contact', href: '/contact' },
        ],
        footerServicesLinks: [
            { _key: key(), name: 'Gardiennage', href: '/nos-prestations#gardiennage' },
            { _key: key(), name: 'Sécurité Mobile', href: '/nos-prestations#mobile' },
            { _key: key(), name: 'Sécurité Incendie', href: '/nos-prestations#ssiap' },
            { _key: key(), name: 'Événementiel', href: '/nos-prestations#event' },
            { _key: key(), name: 'Maître Chien', href: '/nos-prestations#cynophile' },
        ],
        footerCompanyLinks: [
            { _key: key(), name: 'Qui sommes-nous', href: '/qui-sommes-nous' },
            { _key: key(), name: 'Recrutement', href: '/recrutement' },
            { _key: key(), name: 'Contact', href: '/contact' },
        ],
        footerLegalLinks: [
            { _key: key(), name: 'Mentions Légales', href: '/mentions-legales' },
            { _key: key(), name: 'Politique de Confidentialité', href: '/politique-de-confidentialite' },
            { _key: key(), name: 'CGV', href: '/mentions-legales' },
        ],
        floatingButtonColor: 'bg-primary',
        floatingButtonActions: [
            {
                _key: key(),
                label: 'Devis Gratuit',
                href: '/devis',
                iconName: 'FileText',
                iconBgColor: 'bg-primary/10',
                iconColor: 'text-primary'
            },
            {
                _key: key(),
                label: '05 56 44 02 79',
                href: 'tel:0556440279',
                iconName: 'Phone',
                iconBgColor: 'bg-green-100 dark:bg-green-900/30',
                iconColor: 'text-green-600'
            }
        ],
        smtp_host: 'smtp.gmail.com',
        smtp_port: 465,
        from_email: 'noreply@security-plus.fr',
        to_email: 'contact@security-plus.fr'
    },
    // 2. Page Accueil
    {
        _id: 'pageHome',
        _type: 'pageHome',
        heroTitle: 'Votre sécurité est notre priorité absolue',
        heroSubtitle: 'Expertise & Professionalisme en Sécurité Privée',
        heroDescription: 'Security Plus vous accompagne dans tous vos besoins de gardiennage, sécurité incendie et surveillance à Bordeaux et en Nouvelle-Aquitaine.',
        servicesSubtitle: 'Nos Expertises',
        servicesTitle: 'Des solutions de sécurité adaptées à vos besoins',
        servicesDescription: 'Nous déployons des stratégies de protection sur mesure pour garantir la sûreté de vos biens et de vos collaborateurs.',
        services: [
            { _key: key(), title: 'Gardiennage', description: 'Surveillance humaine de sites industriels, tertiaires et commerciaux. Contrôle d\'accès et rondes de sécurité.', iconName: 'Shield', href: '/nos-prestations#gardiennage', color: 'bg-blue-500' },
            { _key: key(), title: 'Sécurité Incendie (SSIAP)', description: 'Agents SSIAP 1, 2 et 3 pour la prévention et l\'intervention incendie dans les ERP et IGH.', iconName: 'Flame', href: '/nos-prestations#ssiap', color: 'bg-orange-500' },
            { _key: key(), title: 'Sûreté & Prévol', description: 'Lutte contre la démarque inconnue et les vols en magasin. Agents arrière-caisse et inspecteurs.', iconName: 'UserX', href: '/nos-prestations#prevol', color: 'bg-purple-500' },
            { _key: key(), title: 'Sécurité Mobile', description: 'Rondes d\'ouverture et de fermeture, interventions sur alarme avec véhicules géolocalisés.', iconName: 'Car', href: '/nos-prestations#mobile', color: 'bg-green-500' },
            { _key: key(), title: 'Agent Cynophile', description: 'Binôme homme-chien pour la dissuasion et la protection de sites sensibles ou grands espaces.', iconName: 'Dog', href: '/nos-prestations#cynophile', color: 'bg-yellow-600' },
            { _key: key(), title: 'Sécurité Événementielle', description: 'Gestion de foule, palpation et sécurisation pour vos concerts, festivals et manifestations sportives.', iconName: 'Calendar', href: '/nos-prestations#event', color: 'bg-red-500' },
        ],
        featuresSubtitle: 'Pourquoi Security Plus ?',
        featuresTitle: 'L\'excellence opérationnelle au service de votre sérénité',
        featuresDescription: 'Depuis 2017, nous bâtissons une relation de confiance avec nos clients en Nouvelle-Aquitaine grâce à notre rigueur et notre professionnalisme sans faille.',
        featuresStatValue: '100%',
        featuresStatLabel: 'De nos agents sont agréés par le CNAPS (Conseil National des Activités Privées de Sécurité).',
        features: [
            { _key: key(), title: 'Agents Certifiés & Qualifiés', description: 'Tous nos agents détiennent une carte professionnelle CNAPS valide et suivent une formation continue rigoureuse.', iconName: 'Award' },
            { _key: key(), title: 'Réactivité 24h/7j', description: 'Notre permanence opérationnelle assure une prise en compte immédiate de vos besoins et une intervention rapide.', iconName: 'Clock' },
            { _key: key(), title: 'Ancrage Local Aquitaine', description: 'Basés à Bordeaux, nous intervenons dans un rayon de 50km, garantissant une proximité réelle avec nos clients.', iconName: 'MapPin' },
            { _key: key(), title: 'Processus Qualité', description: 'Des procédures strictes et un encadrement permanent pour assurer une prestation de haute qualité.', iconName: 'ClipboardCheck' },
        ],
        sectorsSubtitle: 'Secteurs d\'Activité',
        sectorsTitle: 'Nous protégeons tous les environnements',
        sectors: [
            { _key: key(), name: 'Industrie & Logistique', description: 'Sécurisation des sites de production, entrepôts et zones de fret. Contrôle des flux et prévention des risques.', iconName: 'Factory' },
            { _key: key(), name: 'BTP & Chantier', description: 'Surveillance de chantiers, protection contre le vol de matériaux et d\'engins, prévention des intrusions.', iconName: 'HardHat' },
            { _key: key(), name: 'Santé & Hôpitaux', description: 'Sécurité des établissements de soin, gestion des flux patients/visiteurs, sécurité incendie.', iconName: 'Stethoscope' },
            { _key: key(), name: 'Hôtellerie & Luxe', description: 'Accueil sécurisé, discrétion et surveillance pour hôtels, résidences de prestige et événements VIP.', iconName: 'Hotel' },
        ],
        testimonialsRating: '5.0',
        testimonialsLink: 'https://share.google/kIW2bfbHXE0YXR9jS',
        testimonials: [
            { _key: key(), content: 'Très bonne expérience avec SECURITY PLUS. Entreprise sérieuse, professionnelle et réactive. L\'équipe est à l\'écoute et a su répondre rapidement à nos besoins.', author: 'Abdelilah Yamoune', date: 'il y a 2 semaines', rating: 5, keywords: 'Sérieux, Professionnalisme, Réactivité' },
            { _key: key(), content: 'Excellent prestataire pour la sécurité de notre événement d\'entreprise. Les agents étaient ponctuels, bien présentés et ont géré l\'accueil avec beaucoup de courtoisie.', author: 'Benjamin Lalande', date: 'il y a 1 mois', rating: 5, keywords: 'Ponctualité, Courtoisie' },
            { _key: key(), content: 'Entreprise de sécurité très fiable. Nous les utilisons pour des rondes nocturnes. Les rapports sont détaillés et la communication est fluide avec la direction.', author: 'Pierre S.', date: 'il y a 3 mois', rating: 5, keywords: 'Fiabilité, Communication' },
        ],
        mapSubtitle: 'Notre Rayonnement',
        mapTitle: 'Nouvelle-Aquitaine',
        mapDescription: 'Nous intervenons sur l\'ensemble de la région avec une concentration forte sur la Gironde et les départements limitrophes.',
        mapDepartments: [
            { _key: key(), id: '33', name: 'Gironde', sitesCount: 80, agentsCount: 45, clientsCount: 150 },
            { _key: key(), id: '24', name: 'Dordogne', sitesCount: 25, agentsCount: 12, clientsCount: 45 },
            { _key: key(), id: '47', name: 'Lot-et-Garonne', sitesCount: 15, agentsCount: 10, clientsCount: 30 },
            { _key: key(), id: '40', name: 'Landes', sitesCount: 35, agentsCount: 20, clientsCount: 60 },
            { _key: key(), id: '64', name: 'Pyrénées-Atlantiques', sitesCount: 40, agentsCount: 30, clientsCount: 85 }
        ],
        faqs: [
            { _key: key(), question: 'Quelle est votre zone d\'intervention ?', answer: 'Nous intervenons principalement en Nouvelle-Aquitaine, avec une forte présence dans un rayon de 50 km autour de Bordeaux (Mérignac, Pessac, Bègles, etc.). Pour des missions spécifiques ou de longue durée, nous pouvons étudier des déploiements plus larges.' },
            { _key: key(), question: 'Vos agents sont-ils certifiés ?', answer: 'Absolument. 100% de nos agents de sécurité détiennent une carte professionnelle active délivrée par le CNAPS (Conseil National des Activités Privées de Sécurité). Ils sont également formés au secourisme (SST) et suivent des mises à niveau régulières.' },
            { _key: key(), question: 'Proposez-vous des agents de sécurité incendie (SSIAP) ?', answer: 'Oui, nous disposons d\'agents qualifiés SSIAP 1, SSIAP 2 (Chefs d\'équipe) et SSIAP 3 (Chefs de service) pour assurer la sécurité incendie de vos Établissements Recevant du Public (ERP) ou Immeubles de Grande Hauteur (IGH).' },
            { _key: key(), question: 'Quel est le délai de mise en place d\'une prestation ?', answer: 'Notre force est la réactivité. Pour une urgence (intrusion, panne système, sinistre), nous pouvons déployer un agent sous 2 à 4 heures. Pour des contrats planifiés, nous mettons en place le dispositif sous 24 à 48 heures après validation du devis.' },
            { _key: key(), question: 'Intervenez-vous pour les particuliers ?', answer: 'Tout à fait. Nous proposons des services de surveillance pour les résidences privées (vacances, absences prolongées) ainsi que la sécurisation d\'événements privés (mariages, réceptions).' },
            { _key: key(), question: 'Comment obtenir un devis personnalisé ?', answer: 'Vous pouvez effectuer une demande de devis gratuitement via notre formulaire en ligne \'Devis\', ou nous contacter directement par téléphone au 05 56 44 02 79. Nous nous engageons à vous répondre sous 24h ouvrées.' },
        ],
        ctaTitle: 'Prêt à sécuriser votre activité ?',
        ctaDescription: 'Obtenez une étude personnalisée et un devis gratuit sous 24h. Nos experts sont à votre écoute pour définir la meilleure stratégie de protection.',
        ctaButtonText: 'Demander un devis',
        ctaPhoneText: 'Appeler le 05 56 44 02 79'
    },
    // 3. Page About
    {
        _id: 'about',
        _type: 'pageAbout',
        headerTitle: 'Qui Sommes-Nous ?',
        headerDescription: 'Une équipe d\'experts passionnés par votre sécurité depuis plus de 10 ans.',
        storySubtitle: 'Notre Histoire',
        storyTitle: 'Notre engagement depuis 2017',
        storyContent: [
            {
                _type: 'block',
                _key: key(),
                children: [{ _type: 'span', _key: key(), text: 'Fondée en 2017 en région bordelaise, ' }, { _type: 'span', _key: key(), text: 'SECURITY PLUS', marks: ['strong'] }, { _type: 'span', _key: key(), text: ' est née d\'une volonté simple : apporter une réponse professionnelle, rigoureuse et humaine aux besoins croissants de sécurité en Nouvelle-Aquitaine.' }],
                markDefs: []
            },
            {
                _type: 'block',
                _key: key(),
                children: [{ _type: 'span', _key: key(), text: 'Détentrice de l\'autorisation CNAPS ' }, { _type: 'span', _key: key(), text: 'AUT-033-2116-09-26-2017-0620770', marks: ['strong'] }, { _type: 'span', _key: key(), text: ', notre société s\'est rapidement imposée comme un partenaire de confiance pour les industriels, le secteur du BTP et l\'événementiel.' }],
                markDefs: []
            },
            {
                _type: 'block',
                _key: key(),
                children: [{ _type: 'span', _key: key(), text: 'Notre force réside dans notre proximité et notre capacité à mobiliser des équipes qualifiées (SSIAP, CQP APS, Agents Cynophiles) en un temps record, 24h/24 et 7j/7.' }],
                markDefs: []
            }
        ],
        valuesSubtitle: 'Nos Valeurs',
        valuesTitle: 'Ce qui nous définit',
        values: [
            { _key: key(), title: 'Rigueur', description: 'Chaque mission fait l\'objet d\'un cahier des charges strict et de contrôles réguliers.' },
            { _key: key(), title: 'Proximité', description: 'Une direction accessible et des agents locaux pour une meilleure connaissance du terrain.' },
            { _key: key(), title: 'Transparence', description: 'Des rapports d\'intervention clairs et une communication fluide avec nos clients.' }
        ],
        certificationLabel: 'Agréments officiels',
        certificationPrefix: 'Autorisation CNAPS',
        certificationNumber: 'AUT-033-2116-09-26-2017-0620770'
    },
    // 4. Page Contact
    {
        _id: 'contact',
        _type: 'pageContact',
        headerTitle: 'Contactez-Nous',
        headerDescription: 'Une question ? Un besoin urgent ? Nos experts vous répondent 24h/7j.',
        contactInfoText: 'Nos bureaux sont situés au cœur de Bordeaux, mais nous intervenons sur toute la Gironde.',
        officeHours: 'Lundi - Vendredi : 09h00 - 18h00 / Urgences : 24h/24',
        zoneIntervention: 'Bordeaux, Mérignac, Pessac et toute la Gironde (33).',
        googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.234576367284!2d-0.5180622!3d44.877874999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552f2fdb3fffff%3A0x28e8c3ebb7465692!2sSECURITY%20PLUS!5e0!3m2!1sfr!2sfr!4v1773060663462!5m2!1sfr!2sfr'
    },
    // 5. Page Prestations
    {
        _id: 'nos-prestations',
        _type: 'pagePrestations',
        headerTitle: "Nos Solutions de Sécurité",
        headerDescription: "Une gamme complète de prestations pour protéger vos biens, vos collaborateurs et vos événements.",
        prestations: [
            {
                _key: key(),
                id: 'gardiennage',
                title: "Gardiennage & Surveillance",
                description: "Sécurisation de sites industriels, tertiaires et résidentiels.",
                content: "Nos agents de surveillance assurent une présence dissuasive et interviennent en cas d'anomalie. Nous proposons des rondes de surveillance, le contrôle des accès et la gestion des alarmes pour une protection optimale de vos locaux.",
                iconName: "Shield",
                features: ["Agents qualifiés ADS", "Surveillance 24h/24", "Rondes mobiles", "Contrôle d'accès"]
            },
            {
                _key: key(),
                id: 'ssiap',
                title: "Sécurité Incendie (SSIAP)",
                description: "Prévention et lutte contre l'incendie en ERP et IGH.",
                content: "Nos agents certifiés SSIAP (1, 2 et 3) veillent à la conformité de vos installations et à la sécurité des personnes. Ils assurent la maintenance de premier niveau du matériel incendie, l'évacuation en cas de sinistre et les premiers secours.",
                iconName: "Flame",
                features: ["Certifications SSIAP 1/2/3", "Prévention incendie", "Gestion des alarmes", "Assistance aux personnes"]
            },
            {
                _key: key(),
                id: 'surete',
                title: "Sûreté & Prévol",
                description: "Protection contre le vol, les actes de malveillance et la démarque inconnue en magasin.",
                content: "Spécialistes de la grande distribution et des commerces, nos agents pré-vol luttent efficacement contre la démarque inconnue et les vols à l'étalage.",
                iconName: "Eye",
                features: ["Surveillance des rayons", "Arrière-caisse", "Vidéoprotection", "Interpellation dans le respect du cadre légal", "Rédaction de rapports"]
            },
            {
                _key: key(),
                id: 'cynophile',
                title: "Agent Cynophile",
                description: "Binôme homme-chien pour une dissuasion forte.",
                content: "Le binôme agent de sécurité et chien offre une capacité de dissuasion et de détection supérieure, idéale pour les grands espaces, parkings ou sites sensibles.",
                iconName: "Dog",
                features: ["Dissuasion renforcée", "Détection d'intrusion", "Protection de sites industriels", "Surveillance de nuit", "Défense du poste"]
            },
            {
                _key: key(),
                id: 'mobile',
                title: "Sécurité Mobile",
                description: "Rondes de surveillance et interventions sur alarme pour une protection flexible.",
                content: "Pour les sites ne nécessitant pas une présence permanente, nos patrouilles mobiles effectuent des rondes aléatoires ou programmées pour vérifier l'intégrité de vos locaux.",
                iconName: "Car",
                features: ["Rondes de dissuasion", "Intervention sur alarme 24h/7j", "Levée de doute physique", "Véhicules géolocalisés", "Rapports électroniques en temps réel"]
            },
            {
                _key: key(),
                id: 'event',
                title: "Sécurité Événementielle",
                description: "Gestion de la sécurité pour vos rassemblements, salons et événements privés.",
                content: "Nous sécurisons vos événements (concerts, foires, événements sportifs, soirées d'entreprise) en gérant les flux et en assurant la sécurité des participants.",
                iconName: "Users",
                features: ["Accueil et palpation de sécurité", "Gestion de foule", "Sécurisation des accès VIP", "Surveillance de la scène et des loges", "Gestion des conflits"]
            }
        ],
        ctaTitle: "Un besoin spécifique ?",
        ctaDescription: "Nous développons des solutions sur mesure pour les secteurs de l'industrie, de la logistique, du tertiaire et de la santé.",
        ctaButtonText: "Contactez-nous"
    },
    // 6. Page Devis
    {
        _id: 'devis',
        _type: 'pageDevis',
        headerTitle: 'Demande de Devis Gratuit',
        headerDescription: 'Obtenez une estimation personnalisée pour vos besoins de sécurité en moins de 2 minutes.'
    },
    // 7. Page Recrutement
    {
        _id: 'recrutement',
        _type: 'pageRecrutement',
        headerTitle: 'Rejoignez-Nous',
        headerDescription: 'Security Plus recrute des agents de sécurité passionnés et rigoureux.',
        careerTitle: 'Pourquoi nous rejoindre ?',
        careerDescription: 'Nous offrons un cadre de travail stimulant, des formations continues et des perspectives d\'évolution.',
        careerAdvantages: [
            'Rémunération motivante et primes',
            'Planning respectueux de l\'équilibre vie pro/perso',
            'Formation continue (Recyclage MAC, SSIAP...)',
            'Équipement professionnel de qualité'
        ],
        jobOffers: [
            { _key: key(), id: 'SEC-33-01', title: 'Agent de Sécurité Confirmé (H/F)', location: 'Bordeaux (33)', type: 'CDI - Temps plein' },
            { _key: key(), id: 'SSIAP-33-04', title: 'Agent SSIAP 1 (H/F)', location: 'Mérignac (33)', type: 'CDD - 6 mois' },
            { _key: key(), id: 'CYNO-33-02', title: 'Agent Cynophile (H/F)', location: 'Cestas (33)', type: 'Vacations' },
        ]
    },
    // 8. Mentions Légales
    {
        _id: 'mentions-legales',
        _type: 'page',
        title: 'Mentions Légales',
        slug: { _type: 'slug', current: 'mentions-legales' },
        body: [
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : security-plus.fr les informations suivantes :' }] },
            { _key: key(), _type: 'block', style: 'h2', children: [{ _key: key(), _type: 'span', text: 'ÉDITEUR' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Le site security-plus.fr est la propriété exclusive de ' }, { _key: key(), _type: 'span', text: 'SASU SECURITY PLUS', marks: ['strong'] }, { _key: key(), _type: 'span', text: ', qui l’édite.' }] },
            { _key: key(), _type: 'block', listItem: 'bullet', children: [{ _key: key(), _type: 'span', text: 'SECURITY PLUS', marks: ['strong'] }] },
            { _key: key(), _type: 'block', listItem: 'bullet', children: [{ _key: key(), _type: 'span', text: 'SASU au capital de 1 000,00 €' }] },
            { _key: key(), _type: 'block', listItem: 'bullet', children: [{ _key: key(), _type: 'span', text: 'Tél : 07.62.24.85.42' }] },
            { _key: key(), _type: 'block', listItem: 'bullet', children: [{ _key: key(), _type: 'span', text: '1 AV DE LA RESISTANCE 33310 LORMONT' }] },
            { _key: key(), _type: 'block', listItem: 'bullet', children: [{ _key: key(), _type: 'span', text: 'Immatriculée au RCS de Bordeaux B 831 642 871' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Directeur de la publication : Abdelilah LAHLAL' }] },
            { _key: key(), _type: 'block', style: 'h2', children: [{ _key: key(), _type: 'span', text: 'HÉBERGEMENT' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Le site est hébergé par Ionos (1&1) - 7 Place de la Gare, 57200 Sarreguemines.' }] },
            { _key: key(), _type: 'block', style: 'h2', children: [{ _key: key(), _type: 'span', text: 'DESCRIPTION DES SERVICES FOURNIS' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Le site security-plus.fr a pour objet de fournir une information concernant l’ensemble des activités de la société. Bien que nous nous efforcions de fournir des informations précises, nous ne pourrons être tenus responsables des omissions ou inexactitudes.' }] },
            { _key: key(), _type: 'block', style: 'h2', children: [{ _key: key(), _type: 'span', text: 'PROPRIÉTÉ INTELLECTUELLE' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Le propriétaire du site détient les droits d’usage sur tous les éléments accessibles sur le site. Toute reproduction ou adaptation est interdite sans autorisation préalable.' }] }
        ]
    },
    // 9. Politique de Confidentialité
    {
        _id: 'politique-de-confidentialite',
        _type: 'page',
        title: 'Politique de Confidentialité',
        slug: { _type: 'slug', current: 'politique-de-confidentialite' },
        body: [
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Le site web SECURITY PLUS est détenu par SECURITY PLUS, qui est un contrôleur de données de vos données personnelles.' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Nous prenons soin de vos données personnelles et nous nous engageons à en garantir la confidentialité et la sécurité.' }] },
            { _key: key(), _type: 'block', style: 'h2', children: [{ _key: key(), _type: 'span', text: 'Informations collectées' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Lorsque vous visitez le site, nous recueillons automatiquement certaines informations sur votre appareil (navigateur, IP, fuseau horaire, cookies).' }] },
            { _key: key(), _type: 'block', style: 'h2', children: [{ _key: key(), _type: 'span', text: 'Vos droits' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles vous concernant.' }] }
        ]
    },
    // 10. CGV
    {
        _id: 'cgv',
        _type: 'page',
        title: 'Conditions Générales de Vente (CGV)',
        slug: { _type: 'slug', current: 'cgv' },
        body: [
            { _key: key(), _type: 'block', style: 'h2', children: [{ _key: key(), _type: 'span', text: '1. OBJET' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre la société SECURITY PLUS et ses clients.' }] },
            { _key: key(), _type: 'block', style: 'h2', children: [{ _key: key(), _type: 'span', text: '2. PRESTATIONS' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'SECURITY PLUS s\'engage à fournir des prestations de sécurité, de gardiennage et d\'intervention conformes au devis accepté.' }] },
            { _key: key(), _type: 'block', style: 'h2', children: [{ _key: key(), _type: 'span', text: '3. TARIFS ET PAIEMENT' }] },
            { _key: key(), _type: 'block', children: [{ _key: key(), _type: 'span', text: 'Les tarifs sont indiqués dans le devis. Le paiement s\'effectue selon les modalités prévues au contrat.' }] }
        ]
    }
]

async function seed() {
    console.log('🚀 Starting seeding process...')

    for (const doc of seedData) {
        try {
            console.log(`📦 Seeding document: ${doc._id} (${doc._type})...`)

            // Delete draft to ensure Studio shows published data
            await client.delete(`drafts.${doc._id}`).catch(() => { })

            await client.createOrReplace(doc as any)
            console.log(`✅ Success: ${doc._id}`)
        } catch (err: any) {
            console.error(`❌ Failed to seed ${doc._id}:`, err.message)
        }
    }

    console.log('\n🏁 Seeding completed!')
}

seed()

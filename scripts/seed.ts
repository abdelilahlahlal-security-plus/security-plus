/**
 * Seed script — Injects all hardcoded data into Sanity CMS.
 *
 * Usage:
 *   npx tsx scripts/seed.ts
 *
 * Prerequisites:
 *   - Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local
 *   - Set SANITY_API_TOKEN in .env.local (requires write access)
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2025-12-19',
    useCdn: false,
})

async function seed() {
    console.log('🌱 Starting Sanity seed...\n')

    // ─── 1. Settings (singleton) ───
    console.log('⚙️  Creating Settings...')
    await client.createOrReplace({
        _id: 'settings',
        _type: 'settings',
        title: 'SECURITY PLUS',
        description: 'Votre partenaire de confiance pour la sécurité privée et le gardiennage en Nouvelle-Aquitaine.',
        cnaps: 'AUT-033-2116-09-26-2017-0620770',
        phone: '05 56 44 02 79',
        phoneRaw: '0556440279',
        email: 'contact@security-plus.fr',
        address: '50 km autour de Bordeaux\nNouvelle-Aquitaine, France',
        footerDescription: 'Votre partenaire de confiance pour la sécurité privée et le gardiennage en Nouvelle-Aquitaine. Protection des biens et des personnes 24h/24 et 7j/7.',
        heroBadge: 'Sécurité Privée en Nouvelle-Aquitaine',
        heroTitle: 'Votre sécurité est',
        heroTitleHighlight: 'notre priorité absolue',
        heroDescription: 'Experts en gardiennage, sécurité incendie et surveillance 24h/24. Une équipe certifiée CNAPS à votre service pour protéger ce qui compte le plus.',
        heroStatsLabel: 'Agents certifiés',
        heroStatsSubLabel: 'Disponibles 24/7',
        ctaTitle: 'Prêt à sécuriser votre activité ?',
        ctaDescription: 'Nos experts en sécurité vous accompagnent dans la mise en place d\'une solution sur mesure. Devis gratuit et sans engagement sous 24h.',
        featuresSubtitle: 'Pourquoi Security Plus ?',
        featuresTitle: 'L\'excellence opérationnelle au service de votre sérénité',
        featuresDescription: 'Depuis 2017, nous bâtissons une relation de confiance avec nos clients en Nouvelle-Aquitaine grâce à notre rigueur et notre professionnalisme sans faille.',
        featuresHighlightValue: '100%',
        featuresHighlightText: 'De nos agents sont agréés par le CNAPS (Conseil National des Activités Privées de Sécurité).',
        googleReviewScore: 5.0,
        navigationLinks: [
            { _key: 'nav1', name: 'Accueil', href: '/' },
            { _key: 'nav2', name: 'Nos Prestations', href: '/nos-prestations' },
            { _key: 'nav3', name: 'Qui sommes-nous', href: '/qui-sommes-nous' },
            { _key: 'nav4', name: 'Recrutement', href: '/recrutement' },
            { _key: 'nav5', name: 'Contact', href: '/contact' },
        ],
        footerServicesLinks: [
            { _key: 'fs1', name: 'Gardiennage', href: '/nos-prestations#gardiennage' },
            { _key: 'fs2', name: 'Sécurité Mobile', href: '/nos-prestations#mobile' },
            { _key: 'fs3', name: 'Sécurité Incendie', href: '/nos-prestations#ssiap' },
            { _key: 'fs4', name: 'Événementiel', href: '/nos-prestations#event' },
            { _key: 'fs5', name: 'Maître Chien', href: '/nos-prestations#cynophile' },
        ],
        footerCompanyLinks: [
            { _key: 'fc1', name: 'Qui sommes-nous', href: '/qui-sommes-nous' },
            { _key: 'fc2', name: 'Recrutement', href: '/recrutement' },
            { _key: 'fc3', name: 'Blog', href: '/blog' },
            { _key: 'fc4', name: 'Contact', href: '/contact' },
        ],
        footerLegalLinks: [
            { _key: 'fl1', name: 'Mentions Légales', href: '/mentions-legales' },
            { _key: 'fl2', name: 'Politique de Confidentialité', href: '/politique-de-confidentialite' },
            { _key: 'fl3', name: 'CGV', href: '/mentions-legales' },
        ],
        socialLinks: [
            { _key: 'sl1', platform: 'facebook', url: 'https://facebook.com' },
            { _key: 'sl2', platform: 'linkedin', url: 'https://linkedin.com' },
            { _key: 'sl3', platform: 'instagram', url: 'https://instagram.com' },
        ],
    })

    // ─── 2. Services ───
    console.log('🛡️  Creating Services...')
    const services = [
        { title: 'Gardiennage', description: 'Surveillance humaine de sites industriels, tertiaires et commerciaux. Contrôle d\'accès et rondes de sécurité.', icon: 'Shield', href: '/nos-prestations#gardiennage', color: 'bg-blue-500', order: 1 },
        { title: 'Sécurité Incendie (SSIAP)', description: 'Agents SSIAP 1, 2 et 3 pour la prévention et l\'intervention incendie dans les ERP et IGH.', icon: 'Flame', href: '/nos-prestations#ssiap', color: 'bg-orange-500', order: 2 },
        { title: 'Protection Rapprochée', description: 'Agents de protection rapprochée (APR) pour la sécurité des personnes dans des contextes sensibles.', icon: 'UserX', href: '/nos-prestations#protection', color: 'bg-red-500', order: 3 },
        { title: 'Sécurité Mobile', description: 'Rondes de surveillance et levées de doute par nos équipes mobiles sur l\'ensemble de la Nouvelle-Aquitaine.', icon: 'Car', href: '/nos-prestations#mobile', color: 'bg-green-500', order: 4 },
        { title: 'Agent Cynophile', description: 'Maître-chien certifié pour la surveillance, les rondes et la dissuasion sur sites sensibles.', icon: 'Dog', href: '/nos-prestations#cynophile', color: 'bg-purple-500', order: 5 },
        { title: 'Sécurité Événementielle', description: 'Dispositifs de sécurité sur mesure pour vos événements : concerts, salons, manifestations sportives.', icon: 'Calendar', href: '/nos-prestations#event', color: 'bg-teal-500', order: 6 },
    ]
    for (const s of services) {
        await client.create({ _type: 'service', ...s })
    }

    // ─── 3. Features ───
    console.log('⭐  Creating Features...')
    const features = [
        { name: 'Certification CNAPS', description: 'Tous nos agents disposent de leur carte professionnelle délivrée par le CNAPS, garantissant compétence et légalité.', icon: 'Award', order: 1 },
        { name: 'Disponibilité 24/7', description: 'Notre centre opérationnel assure une permanence jour et nuit pour gérer toute situation d\'urgence.', icon: 'Clock', order: 2 },
        { name: 'Couverture régionale', description: 'Présents sur l\'ensemble de la Nouvelle-Aquitaine, nous intervenons dans un rayon de 50km autour de Bordeaux.', icon: 'MapPin', order: 3 },
        { name: 'Sur-mesure', description: 'Chaque site est unique. Nous concevons un dispositif de sécurité adapté après un audit complet de vos besoins.', icon: 'ClipboardCheck', order: 4 },
    ]
    for (const f of features) {
        await client.create({ _type: 'feature', ...f })
    }

    // ─── 4. Sectors ───
    console.log('🏭  Creating Sectors (without images — add images manually in Studio)...')
    const sectors = [
        { name: 'Industrie & Logistique', description: 'Protection des sites industriels, entrepôts et chaînes logistiques. Contrôle d\'accès et prévention des intrusions.', icon: 'Factory', order: 1 },
        { name: 'BTP & Chantiers', description: 'Sécurisation de chantiers de construction et sites en cours de développement. Prévention du vol de matériaux.', icon: 'HardHat', order: 2 },
        { name: 'Santé & Médical', description: 'Sécurité des établissements de santé, cliniques et hôpitaux. Gestion des flux et protection du personnel.', icon: 'Stethoscope', order: 3 },
        { name: 'Hôtellerie & Commerce', description: 'Surveillance des hôtels, centres commerciaux et boutiques. Accueil sécurisé et prévention des vols.', icon: 'Hotel', order: 4 },
    ]
    for (const s of sectors) {
        await client.create({ _type: 'sector', ...s })
    }

    // ─── 5. Testimonials ───
    console.log('💬  Creating Testimonials...')
    const testimonials = [
        { author: 'Marie L.', content: 'Service impeccable et très professionnel. Les agents sont ponctuels, courtois et efficaces. Je recommande vivement Security Plus pour la surveillance de vos locaux professionnels.', rating: 5, date: 'il y a 2 semaines', keywords: 'Sérieux, Professionnalisme, Réactivité' },
        { author: 'Pierre D.', content: 'Nous avons fait appel à Security Plus pour notre chantier BTP et le résultat est excellent. Zéro incident depuis le début de leur intervention. Une équipe vraiment compétente.', rating: 5, date: 'il y a un mois', keywords: 'Efficacité, Compétence, Fiabilité' },
        { author: 'Sophie M.', content: 'Entreprise très réactive et à l\'écoute. Leur dispositif de sécurité pour notre événement était parfaitement adapté. Nous ferons de nouveau appel à eux sans hésiter.', rating: 5, date: 'il y a 3 mois', keywords: 'Réactivité, Écoute, Adaptation' },
    ]
    for (const t of testimonials) {
        await client.create({ _type: 'testimonial', ...t })
    }

    // ─── 6. FAQ ───
    console.log('❓  Creating FAQ...')
    const faqs = [
        { question: 'Quelles zones géographiques couvrez-vous ?', answer: 'Nous intervenons principalement en Nouvelle-Aquitaine, dans un rayon de 50 kilomètres autour de Bordeaux. Cela couvre les départements de la Gironde (33), la Dordogne (24), le Lot-et-Garonne (47), les Landes (40) et les Pyrénées-Atlantiques (64).', order: 1 },
        { question: 'Vos agents sont-ils certifiés ?', answer: 'Oui, 100% de nos agents détiennent une carte professionnelle valide délivrée par le CNAPS (Conseil National des Activités Privées de Sécurité). Nos agents SSIAP disposent des certifications appropriées (SSIAP 1, 2 ou 3).', order: 2 },
        { question: 'Comment obtenir un devis ?', answer: 'Vous pouvez obtenir un devis gratuit et sans engagement en remplissant notre formulaire en ligne, en nous appelant au 05 56 44 02 79, ou en nous envoyant un email. Nous nous engageons à vous répondre sous 24 heures.', order: 3 },
        { question: 'Proposez-vous des contrats flexibles ?', answer: 'Oui, nous nous adaptons à vos besoins. Nous proposons des prestations ponctuelles (événements, remplacements) ainsi que des contrats longue durée. Chaque offre est sur-mesure après un audit de vos besoins.', order: 4 },
        { question: 'Intervenez-vous en urgence ?', answer: 'Notre centre opérationnel est disponible 24h/24 et 7j/7. En cas d\'urgence, nous pouvons déployer des agents en intervention rapide sur votre site. Contactez-nous pour connaître nos délais d\'intervention.', order: 5 },
        { question: 'Quelles sont vos prestations principales ?', answer: 'Nous proposons le gardiennage de sites, la sécurité incendie (SSIAP), la protection rapprochée, la sécurité mobile (rondes), la surveillance cynophile (maître-chien) et la sécurité événementielle.', order: 6 },
    ]
    for (const f of faqs) {
        await client.create({ _type: 'faq', ...f })
    }

    // ─── 7. Departments ───
    console.log('📍  Creating Departments...')
    const departments = [
        { departmentId: '33', name: 'Gironde', clients: 45, agents: 60, sites: 38 },
        { departmentId: '24', name: 'Dordogne', clients: 12, agents: 15, sites: 10 },
        { departmentId: '47', name: 'Lot-et-Garonne', clients: 8, agents: 10, sites: 7 },
        { departmentId: '40', name: 'Landes', clients: 15, agents: 20, sites: 12 },
        { departmentId: '64', name: 'Pyrénées-Atlantiques', clients: 18, agents: 22, sites: 14 },
    ]
    for (const d of departments) {
        await client.create({ _type: 'department', ...d })
    }

    console.log('\n✅ Seed completed successfully!')
    console.log('📌 Note: Sector images need to be added manually via Sanity Studio.')
}

seed().catch((err) => {
    console.error('❌ Seed failed:', err)
    process.exit(1)
})

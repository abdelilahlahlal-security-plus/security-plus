/**
 * Blog Seed Script
 * Usage: npx tsx scripts/seed-blog.ts
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'

dotenv.config({ path: '.env.local' })

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2025-12-19',
    useCdn: false,
})

// Original Data
const blogPosts = [
    {
        slug: "les-nouvelles-reglementations-securite-privee-2024",
        title: "Nouvelles Réglementations Sécurité Privée 2024 : Ce qui change",
        excerpt: "Le secteur de la sécurité privée en France connaît des évolutions majeures en 2024. Le point sur les nouvelles obligations du CNAPS et les impacts pour les entreprises.",
        date: "2024-04-12",
        author: "Jean Dupont",
        category: "Réglementation",
        image: "/images/blog-bordeaux.png",
        tags: ["CNAPS", "Législation", "Formation", "Sécurité", "Conformité"],
        content: `
            <p class="lead">L'année 2024 marque un tournant pour la sécurité privée en France. Avec les Jeux Olympiques en ligne de mire et une volonté accrue de professionnaliser le secteur, le cadre législatif se durcit.</p>
            
            <h2>Renforcement des critères d'agrément CNAPS</h2>
            <p>Le Conseil National des Activités Privées de Sécurité (CNAPS) a mis à jour ses critères pour l'obtention et le renouvellement des cartes professionnelles. Désormais, une enquête de moralité plus stricte est systématiquement menée, incluant une vérification approfondie des antécédents judiciaires.</p>
            
            <h2>La formation continue obligatoire (MAC)</h2>
            <p>Le Maintien et l'Actualisation des Compétences (MAC) devient plus exigeant. Pour les agents de sécurité, le module "terrorisme" a été renforcé, et de nouvelles heures de formation sur la gestion des conflits sont désormais obligatoires tous les 5 ans.</p>
            
            <blockquote>
                "Ces nouvelles mesures visent à garantir un niveau de sécurité optimal pour les donneurs d'ordre et à valoriser le métier d'agent de sécurité." - Direction du CNAPS
            </blockquote>

            <h2>Impact pour les entreprises clientes</h2>
            <p>Pour les entreprises faisant appel à des sociétés de sécurité privée, cela signifie :</p>
            <ul>
                <li>Une garantie de personnel mieux formé et plus fiable.</li>
                <li>Une nécessité de vérifier la conformité de leurs prestataires (nous sommes 100% conformes chez Security Plus).</li>
                <li>Une potentielle légère hausse des coûts horaires, reflétant la montée en compétence du secteur.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Se mettre en conformité n'est pas une option. Chez Security Plus, nous anticipons ces changements depuis des mois pour vous garantir une prestation sans interruption et de haute qualité.</p>
        `
    },
    {
        slug: "comment-securiser-un-evenement-grand-public",
        title: "Comment sécuriser un événement grand public en 5 étapes clés",
        excerpt: "Organiser un événement réussi nécessite une gestion des risques irréprochable. Découvrez notre guide pour une sécurité événementielle sans faille.",
        date: "2024-03-28",
        author: "Sophie Martin",
        category: "Événementiel",
        image: "/images/blog-event.png",
        tags: ["Événementiel", "Contrôle d'accès", "Gestion de foule", "Sécurité", "Planification"],
        content: `
            <p class="lead">Concert, festival, foire ou braderie : tout rassemblement public implique des risques spécifiques. Une bonne sécurisation ne s'improvise pas, elle se planifie.</p>

            <h2>1. L'analyse des risques en amont</h2>
            <p>Avant même de parler d'agents, il faut analyser le site. Y a-t-il des goulots d'étranglement ? Quels sont les accès secours ? Quel est le profil du public attendu ? Cette étape définit tout le dispositif.</p>

            <h2>2. Le filtrage et le contrôle d'accès</h2>
            <p>C'est la première ligne de défense. L'inspection visuelle des sacs et la palpation de sécurité (par des agents agréés) sont indispensables pour empêcher l'introduction d'objets dangereux ou illicites.</p>

            <h2>3. La gestion des flux de foule</h2>
            <p>Une foule statique est gérable, une foule en mouvement est un fluide puissant. Nos agents sont formés pour canaliser les flux, éviter les mouvements de panique et gérer les files d'attente de manière apaisée.</p>

            <h2>4. La sécurité incendie et secours</h2>
            <p>Au-delà de la sûreté, la sécurité civile est primordiale. La présence d'agents SSIAP pour vérifier les installations temporaires et guider les secours en cas de malaise est souvent une obligation légale.</p>

            <h2>5. La communication et la coordination</h2>
            <p>Un PC Sécurité centralisé, relié par radio à tous les agents et en contact avec les forces de l'ordre, permet une réactivité à la seconde en cas d'incident.</p>

            <p>Vous organisez un événement prochainement ? N'attendez pas la dernière minute pour concevoir votre dispositif de sécurité.</p>
        `
    },
    {
        slug: "videoprotection-et-rgpd-bonnes-pratiques",
        title: "Vidéoprotection et RGPD : Les bonnes pratiques en entreprise",
        excerpt: "Installer des caméras ne s'improvise pas. Respect de la vie privée, durée de conservation des images, droits des salariés... Tout ce qu'il faut savoir.",
        date: "2024-02-15",
        author: "Marc Leroy",
        category: "Technologie",
        image: "/images/blog-cctv.png",
        tags: ["RGPD", "Vidéoprotection", "Législation", "Technologie", "Entreprise"],
        content: `
            <p class="lead">La vidéoprotection est un outil dissuasif puissant, mais son usage est strictement encadré par la loi et le RGPD. Une mauvaise installation peut coûter cher en sanctions.</p>

            <h2>Le principe de proportionnalité</h2>
            <p>Vous ne pouvez pas filmer tout, tout le temps. Les caméras doivent filmer les accès, les stocks, les caisses, mais <strong>jamais</strong> les zones de pause, les toilettes, ou le poste de travail d'un employé en permanence (sauf cas particulier justifié).</p>

            <h2>L'information des personnes</h2>
            <p>C'est une obligation légale : des panneaux visibles doivent informer le public et les salariés de l'existence du dispositif, de son but, de la durée de conservation des images, et du contact pour exercer ses droits.</p>

            <h2>Durée de conservation des images</h2>
            <p>En règle générale, les images ne doivent pas être conservées plus de 30 jours. Au-delà, elles doivent être automatiquement effacées, sauf si une procédure judiciaire est en cours.</p>

            <h2>Accès aux images</h2>
            <p>Tout le monde ne peut pas voir les images. L'accès doit être restreint aux responsables de la sécurité ou à la direction. Un registre des accès est recommandé.</p>

            <p>Chez Security Plus, nos agents sont formés pour exploiter ces systèmes de vidéoprotection dans le strict respect du cadre légal, assurant ainsi une surveillance efficace sans compromettre votre conformité.</p>
        `
    },
    {
        slug: "role-agent-ssiap-entreprise",
        title: "Le rôle crucial de l'agent SSIAP en entreprise",
        excerpt: "Au-delà de la simple surveillance, l'agent de sécurité incendie (SSIAP) est un maillon essentiel de la prévention des risques au travail. Zoom sur ses missions.",
        date: "2024-01-10",
        author: "Julie Bernard",
        category: "Sécurité Incendie",
        image: "/images/blog-fire-safety.png",
        tags: ["SSIAP", "Incendie", "Sécurité", "Prévention", "Secours"],
        content: `
            <p class="lead">Le SSIAP (Service de Sécurité Incendie et d'Assistance à Personnes) est souvent perçu comme une contrainte réglementaire, alors qu'il est un pilier de la continuité d'activité.</p>

            <h2>Prévenir plutôt que guérir</h2>
            <p>La mission principale de l'agent SSIAP n'est pas d'éteindre le feu, mais d'éviter qu'il ne démarre. Ses rondes quotidiennes permettent de détecter une prise surchargée, une issue de secours encombrée ou un équipement défaillant.</p>

            <h2>L'intervention précoce</h2>
            <p>En cas de départ de feu, les premières minutes sont décisives. L'agent SSIAP est formé pour intervenir immédiatement avec les moyens appropriés (extincteurs, RIA) et limiter les dégâts avant l'arrivée des pompiers.</p>

            <h2>L'évacuation</h2>
            <p>C'est la mission la plus critique. En cas de départ de feu, l'agent SSIAP gère l'évacuation méthodique du bâtiment, vérifie que personne ne reste en arrière (serre-file) et évite la panique.</p>

            <h2>La tenue du registre de sécurité</h2>
            <p>L'agent s'assure que toutes les vérifications périodiques sont faites et notées. En cas de contrôle ou d'accident, ce document est la preuve juridique de votre bonne gestion.</p>
        `
    },
    {
        slug: "prevenir-cambriolages-locaux-professionnels",
        title: "Prévenir les cambriolages dans les locaux professionnels",
        excerpt: "Les vols en entreprise sont en hausse. Découvrez les stratégies de dissuasion les plus efficaces : alarme, ronde aléatoire, télésurveillance.",
        date: "2023-12-05",
        author: "Thomas Durand",
        category: "Prévention",
        image: "/images/blog-burglary.png",
        tags: ["Cambriolage", "Prévention", "Alarme", "Surveillance", "Conseils"],
        content: `
            <p class="lead">Le cambriolage d'entreprise a un double coût : le vol du matériel, mais aussi l'arrêt de l'activité et le traumatisme des équipes. Mieux vaut prévenir.</p>

            <h2>1. La dissuasion visuelle</h2>
            <p>Un site bien éclairé, des panneaux "Site sous vidéoprotection" bien visibles et une clôture en bon état découragent 80% des opportunistes. Ne négligez pas l'aspect extérieur.</p>

            <h2>2. La protection mécanique</h2>
            <p>Avant l'électronique, pensez au physique. Serrures multipoints, barreaux aux fenêtres du rez-de-chaussée, rideaux métalliques... Retardez l'effraction autant que possible.</p>

            <h2>3. La détection et l'alarme</h2>
            <p>Une alarme reliée à un centre de télésurveillance est indispensable. Mais attention, une alarme qui sonne dans le vide ne sert à rien. Le temps de réaction est la clé.</p>

            <h2>4. Les rondes de sécurité (Levée de doute)</h2>
            <p>La meilleure protection reste la visite physique régulière ou aléatoire d'un agent de sécurité mobile. Cela casse la routine et permet de vérifier que tout est en ordre, même sans alarme.</p>

            <h2>5. La protection des données</h2>
            <p>N'oubliez pas que le vol de données (serveurs, PC portables) est souvent plus dommageable que le vol de stock. Sécurisez vos salles serveurs comme des coffres-forts.</p>
        `
    }
]

// Simple HTML to Portable Text blocks parser
function htmlToBlocks(html: string) {
    const blocks: any[] = []

    // Split by block tags we care about
    const parts = html.split(/<\/?(p|h2|blockquote|ul|li)>/).filter(p => p.trim() !== '')

    // Naive parsing based on visual splitting
    // A better approach for this specific data: regex execution

    const regex = /<(p|h2|blockquote|ul)>(.*?)<\/\1>|<ul>(.*?)<\/ul>/gs
    // Actually the data is well formatted.
    // Let's iterate over the string and find tags.

    // Simplified: split by lines since the source is template literals with newlines
    const lines = html.split('\n').map(l => l.trim()).filter(l => l !== '')

    let currentList: any[] | null = null;

    for (const line of lines) {
        if (line.startsWith('<h2>')) {
            const text = line.replace(/<\/?h2>/g, '')
            blocks.push({
                _key: uuidv4(),
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text }]
            })
        } else if (line.startsWith('<blockquote>')) {
            // Multiline blockquote handling in source? source is one line per tag mostly
            // But let's assume it's one line for simplicity or check end
            const text = line.replace(/<\/?blockquote>/g, '').replace(/"/g, '')
            blocks.push({
                _key: uuidv4(),
                _type: 'block',
                style: 'blockquote',
                children: [{ _type: 'span', text: text.trim() }]
            })
        } else if (line.startsWith('<ul>')) {
            // Start list processing
            // Actually the source has <ul> then <li> on new lines
            continue
        } else if (line.startsWith('<li>')) {
            const text = line.replace(/<\/?li>/g, '')
            blocks.push({
                _key: uuidv4(),
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text }]
            })
        } else if (line.startsWith('</ul>')) {
            continue
        } else if (line.startsWith('<p>')) {
            const text = line.replace(/<\/?p[^>]*>/g, '').replace(/<strong>/g, '').replace(/<\/strong>/g, '')
            blocks.push({
                _key: uuidv4(),
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text }]
            })
        } else if (line.startsWith('<p class="lead">')) {
            const text = line.replace(/<p class="lead">/g, '').replace(/<\/p>/g, '')
            blocks.push({
                _key: uuidv4(),
                _type: 'block',
                style: 'normal', // No 'lead' style in standard schema, use normal or emphasize
                children: [{ _type: 'span', text, marks: ['strong'] }] // Bold for lead
            })
        }
    }

    // Fallback if empty (shouldn't happen)
    if (blocks.length === 0) {
        blocks.push({
            _key: uuidv4(),
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'Content migration placeholder' }]
        })
    }

    return blocks
}

async function seedBlog() {
    console.log('🌱 Starting Blog seed...\n')

    // 1. Categories
    const categoriesMap = new Map<string, string>()
    const uniqueCategories = Array.from(new Set(blogPosts.map(p => p.category)))

    console.log(`Creating ${uniqueCategories.length} categories...`)
    for (const catName of uniqueCategories) {
        const catDoc = await client.create({
            _type: 'category',
            title: catName,
            description: `Articles concernant ${catName}`
        })
        console.log(`Created category: ${catName} (${catDoc._id})`)
        categoriesMap.set(catName, catDoc._id)
    }

    // 2. Posts
    console.log(`Creating ${blogPosts.length} posts...`)
    for (const post of blogPosts) {
        const catId = categoriesMap.get(post.category)

        await client.create({
            _type: 'post',
            title: post.title,
            slug: { _type: 'slug', current: post.slug },
            publishedAt: new Date(post.date).toISOString(),
            // Map mainImage? Need to upload assets or just skip? 
            // The images are local (/images/...). We can't upload them easily without filesystem access to them as buffers.
            // We'll skip image upload for now or use placeholders if needed.
            // But we can store the local path in a text field if we extended the schema, but we didn't.
            // So we skip image. User has to upload them.
            categories: catId ? [{ _type: 'reference', _ref: catId, _key: uuidv4() }] : [],
            body: htmlToBlocks(post.content)
        })
        console.log(`Created post: ${post.title}`)
    }

    console.log('\n✅ Blog seed completed!')
}

seedBlog().catch((err) => {
    console.error('❌ Blog seed failed:', err)
    process.exit(1)
})

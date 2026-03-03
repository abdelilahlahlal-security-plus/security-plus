import { defineField, defineType } from 'sanity'

export const pageHome = defineType({
    name: 'pageHome',
    title: 'Page Accueil',
    type: 'document',
    groups: [
        { name: 'hero', title: '🏠 Hero' },
        { name: 'services', title: '🛠️ Services' },
        { name: 'features', title: '⭐ Avantages' },
        { name: 'sectors', title: '🏢 Secteurs' },
        { name: 'testimonials', title: '💬 Témoignages' },
        { name: 'map', title: '📍 Carte Interactive' },
        { name: 'faq', title: '❓ FAQ' },
        { name: 'cta', title: '📣 CTA Final' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),

        // Hero
        defineField({ name: 'heroTitle', title: 'Titre Hero', type: 'string', group: 'hero' }),
        defineField({ name: 'heroSubtitle', title: 'Sous-titre Hero', type: 'string', group: 'hero' }),
        defineField({ name: 'heroDescription', title: 'Description Hero', type: 'text', group: 'hero' }),
        defineField({ name: 'heroImage', title: 'Image de fond Hero', type: 'image', group: 'hero' }),

        // Services
        defineField({ name: 'servicesSubtitle', title: 'Sous-titre Section Services', type: 'string', group: 'services' }),
        defineField({ name: 'servicesTitle', title: 'Titre Section Services', type: 'string', group: 'services' }),
        defineField({ name: 'servicesDescription', title: 'Description Section Services', type: 'text', group: 'services' }),
        defineField({
            name: 'services',
            title: 'Liste des services',
            type: 'array',
            group: 'services',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', title: 'Titre', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() },
                    { name: 'iconName', title: 'Nom de l\'icône (ex: Shield, Flame, Car)', type: 'string' },
                    { name: 'href', title: 'Lien (ex: /nos-prestations#gardiennage)', type: 'string' },
                    { name: 'color', title: 'Couleur badge (ex: bg-blue-500)', type: 'string' },
                ],
                preview: { select: { title: 'title', subtitle: 'description' } }
            }]
        }),

        // Features / Avantages
        defineField({ name: 'featuresSubtitle', title: 'Sous-titre Section Avantages', type: 'string', group: 'features' }),
        defineField({ name: 'featuresTitle', title: 'Titre Section Avantages', type: 'string', group: 'features' }),
        defineField({ name: 'featuresDescription', title: 'Description Section Avantages', type: 'text', group: 'features' }),
        defineField({ name: 'featuresStatValue', title: 'Statistique (ex: 100%)', type: 'string', group: 'features' }),
        defineField({ name: 'featuresStatLabel', title: 'Label statistique', type: 'text', group: 'features' }),
        defineField({
            name: 'features',
            title: 'Liste des avantages',
            type: 'array',
            group: 'features',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', title: 'Titre', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() },
                    { name: 'iconName', title: 'Nom de l\'icône (ex: Award, Clock, MapPin)', type: 'string' },
                ],
                preview: { select: { title: 'title', subtitle: 'description' } }
            }]
        }),

        // Sectors
        defineField({ name: 'sectorsSubtitle', title: 'Sous-titre Section Secteurs', type: 'string', group: 'sectors', initialValue: 'Secteurs d\'Activité' }),
        defineField({ name: 'sectorsTitle', title: 'Titre Section Secteurs', type: 'string', group: 'sectors', initialValue: 'Nous protégeons tous les environnements' }),
        defineField({
            name: 'sectors',
            title: 'Secteurs d\'activité',
            type: 'array',
            group: 'sectors',
            of: [{
                type: 'object',
                fields: [
                    { name: 'name', title: 'Nom du secteur', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() },
                    { name: 'iconName', title: 'Nom de l\'icône (ex: Factory, HardHat)', type: 'string' },
                    { name: 'image', title: 'Image', type: 'image' },
                ],
                preview: { select: { title: 'name', subtitle: 'description' } }
            }]
        }),

        // Testimonials
        defineField({
            name: 'testimonials',
            title: 'Témoignages',
            type: 'array',
            group: 'testimonials',
            of: [{
                type: 'object',
                fields: [
                    { name: 'content', title: 'Contenu', type: 'text', validation: (Rule) => Rule.required() },
                    { name: 'author', title: 'Auteur', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'date', title: 'Date (ex: il y a 2 semaines)', type: 'string' },
                    { name: 'rating', title: 'Note (1-5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) },
                    { name: 'keywords', title: 'Mots-clés / Aspects positifs', type: 'string' },
                ],
                preview: { select: { title: 'author', subtitle: 'content' } }
            }]
        }),
        defineField({ name: 'testimonialsRating', title: 'Note moyenne affichée', type: 'string', group: 'testimonials' }),
        defineField({ name: 'testimonialsLink', title: 'Lien vers Google Reviews', type: 'url', group: 'testimonials' }),

        // Interactive Map
        defineField({ name: 'mapSubtitle', title: 'Sous-titre Section Carte', type: 'string', group: 'map', initialValue: 'Notre Rayonnement' }),
        defineField({ name: 'mapTitle', title: 'Titre Section Carte', type: 'string', group: 'map', initialValue: 'Nouvelle-Aquitaine' }),
        defineField({ name: 'mapDescription', title: 'Description Section Carte', type: 'text', group: 'map' }),
        defineField({
            name: 'mapDepartments',
            title: 'Données des départements',
            type: 'array',
            group: 'map',
            of: [{
                type: 'object',
                fields: [
                    { name: 'id', title: 'ID du département (ex: 33, 24)', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'name', title: 'Nom du département', type: 'string' },
                    { name: 'sitesCount', title: 'Sites protégés', type: 'number' },
                    { name: 'agentsCount', title: 'Agents mobilisables', type: 'number' },
                    { name: 'clientsCount', title: 'Clients satisfaits', type: 'number' },
                ],
                preview: {
                    select: { title: 'name', subtitle: 'id' }
                }
            }]
        }),

        // FAQ
        defineField({
            name: 'faqs',
            title: 'Questions fréquentes',
            type: 'array',
            group: 'faq',
            of: [{
                type: 'object',
                fields: [
                    { name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'answer', title: 'Réponse', type: 'text', validation: (Rule) => Rule.required() },
                ],
                preview: { select: { title: 'question' } }
            }]
        }),

        // CTA Final
        defineField({ name: 'ctaTitle', title: 'Titre CTA Final', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaDescription', title: 'Description CTA Final', type: 'text', group: 'cta' }),
        defineField({ name: 'ctaButtonText', title: 'Texte du bouton principal', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaPhoneText', title: 'Texte du bouton téléphone', type: 'string', group: 'cta' }),
    ],
    preview: {
        prepare() {
            return { title: 'Page Accueil' }
        }
    }
})

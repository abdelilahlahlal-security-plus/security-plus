import { defineField, defineType } from 'sanity'

export const pageSecteurs = defineType({
    name: 'pageSecteurs',
    title: 'Page Secteurs d\'Activités',
    type: 'document',
    fields: [
        defineField({
            name: 'seoTitle',
            title: 'Titre SEO (Meta Title)',
            type: 'string',
            validation: (rule) => rule.max(60).warning('Maximum 60 caractères recommandés'),
        }),
        defineField({
            name: 'seoDescription',
            title: 'Description SEO (Meta Description)',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.max(160).warning('Maximum 160 caractères recommandés'),
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Sous-titre de l\'en-tête (Hero)',
            type: 'string',
        }),
        defineField({
            name: 'heroTitle',
            title: 'Titre de l\'en-tête (Hero)',
            type: 'string',
        }),
        defineField({
            name: 'heroDescription',
            title: 'Description de l\'en-tête (Hero)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'sectors',
            title: 'Liste des Secteurs d\'Activités',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Nom du secteur',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'slug',
                            title: 'Slug (identifiant dans l\'URL, ex: btp-chantier)',
                            type: 'slug',
                            options: { source: 'name' },
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'iconName',
                            title: 'Nom de l\'icône Lucide',
                            description: 'Ex: Factory, HardHat, Stethoscope, Hotel, ShoppingCart, PartyPopper',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'shortDescription',
                            title: 'Courte description',
                            description: 'Utilisée potentiellement sur la page d\'accueil',
                            type: 'text',
                            rows: 2,
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description détaillée',
                            type: 'text',
                            rows: 5,
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'features',
                            title: 'Points forts / Prestations (Liste)',
                            type: 'array',
                            of: [{ type: 'string' }],
                            validation: (rule) => rule.min(1),
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image d\'illustration',
                            type: 'image',
                            options: { hotspot: true },
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'shortDescription',
                            media: 'image',
                        },
                    },
                },
            ],
        }),
        defineField({
            name: 'ctaTitle',
            title: 'Titre du CTA Finale',
            type: 'string',
        }),
        defineField({
            name: 'ctaDescription',
            title: 'Description du CTA Finale',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'ctaButtonText',
            title: 'Texte du Bouton CTA Finale',
            type: 'string',
        }),
        defineField({
            name: 'ctaButtonLink',
            title: 'Lien du Bouton CTA Finale (ex: /contact)',
            type: 'string',
        }),
    ],
})

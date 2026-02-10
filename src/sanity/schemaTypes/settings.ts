import { defineField, defineType } from 'sanity'

export const settings = defineType({
    name: 'settings',
    title: 'Paramètres du Site',
    type: 'document',
    icon: () => '⚙️',
    groups: [
        { name: 'general', title: 'Général' },
        { name: 'contact', title: 'Contact' },
        { name: 'hero', title: 'Hero (Accueil)' },
        { name: 'cta', title: 'CTA Final' },
        { name: 'features', title: 'Section Avantages' },
        { name: 'navigation', title: 'Navigation' },
        { name: 'social', title: 'Réseaux Sociaux' },
    ],
    fields: [
        // — General —
        defineField({
            name: 'title',
            title: 'Nom du site',
            type: 'string',
            group: 'general',
            initialValue: 'SECURITY PLUS',
        }),
        defineField({
            name: 'description',
            title: 'Description du site (SEO)',
            type: 'text',
            rows: 3,
            group: 'general',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            group: 'general',
            options: { hotspot: true },
        }),
        defineField({
            name: 'cnaps',
            title: 'Numéro d\'agrément CNAPS',
            type: 'string',
            group: 'general',
            initialValue: 'AUT-033-2116-09-26-2017-0620770',
        }),
        defineField({
            name: 'footerDescription',
            title: 'Description du Footer',
            type: 'text',
            rows: 3,
            group: 'general',
        }),

        // — Contact —
        defineField({
            name: 'phone',
            title: 'Téléphone',
            type: 'string',
            group: 'contact',
            initialValue: '05 56 44 02 79',
        }),
        defineField({
            name: 'phoneRaw',
            title: 'Téléphone (brut, pour href)',
            type: 'string',
            group: 'contact',
            description: 'Format sans espaces pour le lien tel: (ex: 0556440279)',
            initialValue: '0556440279',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            group: 'contact',
            initialValue: 'contact@security-plus.fr',
        }),
        defineField({
            name: 'address',
            title: 'Adresse',
            type: 'text',
            rows: 2,
            group: 'contact',
        }),

        // — Hero —
        defineField({
            name: 'heroBadge',
            title: 'Badge du Hero',
            type: 'string',
            group: 'hero',
            initialValue: 'Sécurité Privée en Nouvelle-Aquitaine',
        }),
        defineField({
            name: 'heroTitle',
            title: 'Titre du Hero (ligne 1)',
            type: 'string',
            group: 'hero',
            initialValue: 'Votre sécurité est',
        }),
        defineField({
            name: 'heroTitleHighlight',
            title: 'Titre du Hero (partie colorée)',
            type: 'string',
            group: 'hero',
            initialValue: 'notre priorité absolue',
        }),
        defineField({
            name: 'heroDescription',
            title: 'Description du Hero',
            type: 'text',
            rows: 3,
            group: 'hero',
        }),
        defineField({
            name: 'heroImage',
            title: 'Image de fond du Hero',
            type: 'image',
            group: 'hero',
            options: { hotspot: true },
        }),
        defineField({
            name: 'heroStatsLabel',
            title: 'Label stats Hero',
            type: 'string',
            group: 'hero',
            initialValue: 'Agents certifiés',
        }),
        defineField({
            name: 'heroStatsSubLabel',
            title: 'Sous-label stats Hero',
            type: 'string',
            group: 'hero',
            initialValue: 'Disponibles 24/7',
        }),

        // — CTA Final —
        defineField({
            name: 'ctaTitle',
            title: 'Titre du CTA final',
            type: 'string',
            group: 'cta',
            initialValue: 'Prêt à sécuriser votre activité ?',
        }),
        defineField({
            name: 'ctaDescription',
            title: 'Description du CTA final',
            type: 'text',
            rows: 3,
            group: 'cta',
        }),

        // — Section Features/Avantages —
        defineField({
            name: 'featuresSubtitle',
            title: 'Sous-titre section Avantages',
            type: 'string',
            group: 'features',
            initialValue: 'Pourquoi Security Plus ?',
        }),
        defineField({
            name: 'featuresTitle',
            title: 'Titre section Avantages',
            type: 'string',
            group: 'features',
        }),
        defineField({
            name: 'featuresDescription',
            title: 'Description section Avantages',
            type: 'text',
            rows: 3,
            group: 'features',
        }),
        defineField({
            name: 'featuresHighlightValue',
            title: 'Valeur mise en avant (ex: 100%)',
            type: 'string',
            group: 'features',
            initialValue: '100%',
        }),
        defineField({
            name: 'featuresHighlightText',
            title: 'Texte de la valeur mise en avant',
            type: 'string',
            group: 'features',
        }),

        // — Navigation —
        defineField({
            name: 'navigationLinks',
            title: 'Liens de navigation',
            type: 'array',
            group: 'navigation',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Nom', type: 'string' }),
                        defineField({ name: 'href', title: 'URL', type: 'string' }),
                    ],
                    preview: {
                        select: { title: 'name', subtitle: 'href' },
                    },
                },
            ],
        }),
        defineField({
            name: 'footerServicesLinks',
            title: 'Liens services (Footer)',
            type: 'array',
            group: 'navigation',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Nom', type: 'string' }),
                        defineField({ name: 'href', title: 'URL', type: 'string' }),
                    ],
                    preview: {
                        select: { title: 'name', subtitle: 'href' },
                    },
                },
            ],
        }),
        defineField({
            name: 'footerCompanyLinks',
            title: 'Liens société (Footer)',
            type: 'array',
            group: 'navigation',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Nom', type: 'string' }),
                        defineField({ name: 'href', title: 'URL', type: 'string' }),
                    ],
                    preview: {
                        select: { title: 'name', subtitle: 'href' },
                    },
                },
            ],
        }),
        defineField({
            name: 'footerLegalLinks',
            title: 'Liens légaux (Footer)',
            type: 'array',
            group: 'navigation',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Nom', type: 'string' }),
                        defineField({ name: 'href', title: 'URL', type: 'string' }),
                    ],
                    preview: {
                        select: { title: 'name', subtitle: 'href' },
                    },
                },
            ],
        }),

        // — Social —
        defineField({
            name: 'socialLinks',
            title: 'Réseaux sociaux',
            type: 'array',
            group: 'social',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Plateforme',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Facebook', value: 'facebook' },
                                    { title: 'LinkedIn', value: 'linkedin' },
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'Twitter/X', value: 'twitter' },
                                ],
                            },
                        }),
                        defineField({ name: 'url', title: 'URL', type: 'url' }),
                    ],
                    preview: {
                        select: { title: 'platform', subtitle: 'url' },
                    },
                },
            ],
        }),
        defineField({
            name: 'googleReviewUrl',
            title: 'URL avis Google',
            type: 'url',
            group: 'social',
        }),
        defineField({
            name: 'googleReviewScore',
            title: 'Note Google (ex: 5.0)',
            type: 'number',
            group: 'social',
            validation: (Rule) => Rule.min(0).max(5),
            initialValue: 5.0,
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Paramètres du Site' }
        },
    },
})

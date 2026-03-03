import { defineField, defineType } from 'sanity'

export const pageAbout = defineType({
    name: 'pageAbout',
    title: 'Page Qui Sommes-Nous',
    type: 'document',
    groups: [
        { name: 'header', title: '🏷️ En-tête de page' },
        { name: 'story', title: '📖 Notre Histoire' },
        { name: 'values', title: '💎 Nos Valeurs' },
        { name: 'certifications', title: '🏅 Agréments / Certifications' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),

        // Section 1 — En-tête de page
        defineField({ name: 'headerTitle', title: 'Titre de la page', type: 'string', group: 'header', description: 'Ex: "Qui Sommes-Nous ?"' }),
        defineField({ name: 'headerDescription', title: 'Description de la page', type: 'text', group: 'header', description: 'Ex: "Une entreprise de sécurité privée à taille humaine..."' }),
        defineField({ name: 'headerImage', title: 'Image de fond (Header)', type: 'image', group: 'header' }),

        // Section 2 — Notre Histoire
        defineField({ name: 'storySubtitle', title: 'Sur-titre (petit texte bleu)', type: 'string', group: 'story', description: 'Ex: "Notre Histoire"', initialValue: 'Notre Histoire' }),
        defineField({ name: 'storyTitle', title: 'Titre principal', type: 'string', group: 'story', description: 'Ex: "Expert en sécurité depuis 2017"' }),
        defineField({ name: 'storyContent', title: 'Texte (paragraphes)', type: 'array', of: [{ type: 'block' }], group: 'story', description: 'Le texte détaillé de votre histoire. Vous pouvez mettre du gras, des liens, etc.' }),
        defineField({ name: 'storyImage', title: 'Photo de l\'équipe / image illustrative', type: 'image', group: 'story' }),

        // Section 3 — Nos Valeurs
        defineField({ name: 'valuesSubtitle', title: 'Sur-titre (petit texte bleu)', type: 'string', group: 'values', description: 'Ex: "Nos Valeurs"', initialValue: 'Nos Valeurs' }),
        defineField({ name: 'valuesTitle', title: 'Titre principal', type: 'string', group: 'values', description: 'Ex: "Ce qui nous définit"' }),
        defineField({
            name: 'values',
            title: 'Liste des valeurs',
            type: 'array',
            group: 'values',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', title: 'Titre de la valeur', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() }
                ],
                preview: { select: { title: 'title', subtitle: 'description' } }
            }]
        }),

        // Section 4 — Bandeau Agréments
        defineField({ name: 'certificationLabel', title: 'Label du bandeau', type: 'string', group: 'certifications', description: 'Ex: "Agréments officiels"', initialValue: 'Agréments officiels' }),
        defineField({ name: 'certificationPrefix', title: 'Préfixe', type: 'string', group: 'certifications', description: 'Ex: "Autorisation CNAPS"', initialValue: 'Autorisation CNAPS' }),
        defineField({ name: 'certificationNumber', title: 'Numéro d\'agrément', type: 'string', group: 'certifications', description: 'Si vide, le numéro sera récupéré depuis les Paramètres (Settings).' }),
    ],
    preview: {
        prepare() {
            return { title: 'Page Qui Sommes-Nous' }
        }
    }
})

import { defineField, defineType } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'Articles de Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre de l\'article',
            type: 'string',
            description: 'Choisissez un titre accrocheur pour attirer les lecteurs (max 70 caractères recommandés).',
            validation: Rule => Rule.required().max(80).error('Un titre court et percutant est préférable.'),
        }),
        defineField({
            name: 'slug',
            title: 'URL (Slug)',
            type: 'slug',
            description: 'L\'adresse unique de l\'article sur votre site. Cliquez sur "Generate" après avoir saisi le titre.',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Résumé / Extrait',
            type: 'text',
            rows: 3,
            description: 'Un court résumé de l\'article qui apparaîtra sur la page de liste des blogs et dans les résultats de recherche.',
            validation: Rule => Rule.max(200).warning('Un résumé plus court (max 160-200 caractères) est meilleur pour le SEO.'),
        }),
        defineField({
            name: 'mainImage',
            title: 'Image principale',
            type: 'image',
            description: 'L\'image mise en avant de votre article. Utilisez une image de haute qualité (formats .jpg, .webp).',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'categories',
            title: 'Catégories',
            type: 'array',
            description: 'Sélectionnez une ou plusieurs catégories pour classer votre article.',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Date de publication',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'body',
            title: 'Contenu de l\'article',
            type: 'array',
            description: 'Rédigez votre contenu ici. Utilisez des titres (H2, H3), des listes et des images pour rendre l\'article lisible.',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Titre 2', value: 'h2' },
                        { title: 'Titre 3', value: 'h3' },
                        { title: 'Citation', value: 'blockquote' },
                    ],
                },
                { type: 'image', options: { hotspot: true } },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'publishedAt',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `Publié le ${new Date(author).toLocaleDateString()}` }
        },
    },
})

import { defineField, defineType } from 'sanity'

export const seo = defineType({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre de la page (Meta Title)',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description de la page (Meta Description)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'image',
            title: 'Image de partage (Open Graph)',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'noIndex',
            title: 'Ne pas indexer cette page (noindex)',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})

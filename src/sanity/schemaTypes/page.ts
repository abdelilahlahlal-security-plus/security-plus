import { defineField, defineType } from 'sanity'

export const page = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'body',
            title: 'Contenu (Texte Riche)',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Titre 2', value: 'h2' },
                        { title: 'Titre 3', value: 'h3' },
                        { title: 'Citation', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Liste à puces', value: 'bullet' },
                        { title: 'Liste numérotée', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Gras', value: 'strong' },
                            { title: 'Italique', value: 'em' },
                            { title: 'Souligné', value: 'underline' },
                        ],
                    },
                },
            ],
            description: 'Utilisez cet éditeur pour structurer votre page (CGV, Mentions Légales, etc.). Ne collez pas de code HTML brut ici.',
        }),
    ],
})

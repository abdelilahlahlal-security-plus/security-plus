import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
    name: 'testimonial',
    title: 'Témoignage',
    type: 'document',
    icon: () => '💬',
    fields: [
        defineField({
            name: 'author',
            title: 'Auteur',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Contenu de l\'avis',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'rating',
            title: 'Note (1-5)',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5),
            initialValue: 5,
        }),
        defineField({
            name: 'date',
            title: 'Date relative',
            type: 'string',
            description: 'Ex: "il y a 2 semaines"',
        }),
        defineField({
            name: 'keywords',
            title: 'Mots-clés / Aspects positifs',
            type: 'string',
            description: 'Ex: "Sérieux, Professionnalisme, Réactivité"',
        }),
    ],
    preview: {
        select: { title: 'author', subtitle: 'content' },
    },
})

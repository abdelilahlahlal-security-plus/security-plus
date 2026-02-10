import { defineField, defineType } from 'sanity'

export const feature = defineType({
    name: 'feature',
    title: 'Avantage',
    type: 'document',
    icon: () => '⭐',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icône (nom Lucide)',
            type: 'string',
            description: 'Nom de l\'icône Lucide React (ex: Award, Clock, MapPin, ClipboardCheck)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Ordre d\'affichage',
            type: 'number',
            initialValue: 0,
        }),
    ],
    orderings: [
        {
            title: 'Ordre',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: { title: 'name', subtitle: 'description' },
    },
})

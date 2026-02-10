import { defineField, defineType } from 'sanity'

export const service = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    icon: () => '🛡️',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
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
            description: 'Nom de l\'icône Lucide React (ex: Shield, Flame, UserX, Car, Dog, Calendar)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'href',
            title: 'Lien',
            type: 'string',
            description: 'URL de la page de détail (ex: /nos-prestations#gardiennage)',
        }),
        defineField({
            name: 'color',
            title: 'Couleur CSS',
            type: 'string',
            description: 'Classe Tailwind pour la couleur (ex: bg-blue-500)',
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
        select: { title: 'title', subtitle: 'description' },
    },
})

import { defineField, defineType } from 'sanity'

export const department = defineType({
    name: 'department',
    title: 'Département',
    type: 'document',
    icon: () => '📍',
    fields: [
        defineField({
            name: 'departmentId',
            title: 'Numéro du département',
            type: 'string',
            description: 'Ex: 33, 24, 47, 40, 64',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'name',
            title: 'Nom',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'clients',
            title: 'Nombre de clients',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'agents',
            title: 'Nombre d\'agents',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'sites',
            title: 'Nombre de sites protégés',
            type: 'number',
            initialValue: 0,
        }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'departmentId' },
        prepare({ title, subtitle }) {
            return {
                title: `${subtitle} - ${title}`,
            }
        },
    },
})

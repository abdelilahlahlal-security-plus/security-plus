import { defineField, defineType } from 'sanity'

export const category = defineType({
    name: 'category',
    title: 'Catégories d\'Articles',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nom de la catégorie',
            type: 'string',
            description: 'Ex: Actualités, Conseils, Sécurité Événementielle...',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            description: 'Une brève description de ce que contient cette catégorie.',
        }),
    ],
})

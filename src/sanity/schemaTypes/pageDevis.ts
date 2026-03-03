import { defineField, defineType } from 'sanity'

export const pageDevis = defineType({
    name: 'pageDevis',
    title: 'Page Devis',
    type: 'document',
    groups: [
        { name: 'header', title: '🏷️ En-tête' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),

        defineField({ name: 'headerTitle', title: 'Titre de la page', type: 'string', group: 'header' }),
        defineField({ name: 'headerDescription', title: 'Description de la page', type: 'text', group: 'header' }),
        defineField({ name: 'headerImage', title: 'Image de fond (Header)', type: 'image', group: 'header' }),
    ],
    preview: {
        prepare() {
            return { title: 'Page Devis' }
        }
    }
})

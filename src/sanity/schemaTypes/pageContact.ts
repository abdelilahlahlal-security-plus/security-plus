import { defineField, defineType } from 'sanity'

export const pageContact = defineType({
    name: 'pageContact',
    title: 'Page Contact',
    type: 'document',
    groups: [
        { name: 'header', title: '🏷️ En-tête' },
        { name: 'contact', title: '📍 Coordonnées' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),

        defineField({ name: 'headerTitle', title: 'Titre de la page', type: 'string', group: 'header' }),
        defineField({ name: 'headerDescription', title: 'Description de la page', type: 'text', group: 'header' }),
        defineField({ name: 'headerImage', title: 'Image de fond (Header)', type: 'image', group: 'header' }),

        defineField({ name: 'contactInfoText', title: 'Texte descriptif des coordonnées', type: 'text', group: 'contact' }),
        defineField({ name: 'officeHours', title: 'Texte horaires de bureau', type: 'text', group: 'contact' }),
        defineField({ name: 'zoneIntervention', title: 'Zone d\'intervention (ex: Bordeaux et agglomération)', type: 'text', group: 'contact' }),
        defineField({
            name: 'googleMapUrl',
            title: 'URL de la carte Google Maps (Embed)',
            type: 'string',
            group: 'contact',
            description: 'L\'URL située dans l\'attribut "src" de l\'iframe de partage Google Maps.'
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Page Contact' }
        }
    }
})

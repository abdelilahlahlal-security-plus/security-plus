import { defineField, defineType } from 'sanity'

export const pagePrestations = defineType({
    name: 'pagePrestations',
    title: 'Page Prestations',
    type: 'document',
    groups: [
        { name: 'header', title: '🏷️ En-tête' },
        { name: 'prestations', title: '🛠️ Prestations' },
        { name: 'cta', title: '📣 CTA' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),

        defineField({ name: 'headerTitle', title: 'Titre de la page', type: 'string', group: 'header' }),
        defineField({ name: 'headerDescription', title: 'Description de la page', type: 'text', group: 'header' }),
        defineField({ name: 'headerImage', title: 'Image de fond (Header)', type: 'image', group: 'header' }),

        defineField({
            name: 'prestations',
            title: 'Liste des prestations',
            type: 'array',
            group: 'prestations',
            of: [{
                type: 'object',
                fields: [
                    { name: 'id', title: 'ID unique (ex: gardiennage)', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'title', title: 'Titre', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'description', title: 'Description courte', type: 'text' },
                    { name: 'content', title: 'Contenu détaillé', type: 'text', description: 'Texte complet affiché sur la page prestations' },
                    { name: 'iconName', title: 'Nom de l\'icône (ex: Shield, Flame)', type: 'string', initialValue: 'Shield' },
                    { name: 'image', title: 'Image illustrative', type: 'image' },
                    { name: 'features', title: 'Liste des caractéristiques', type: 'array', of: [{ type: 'string' }] }
                ],
                preview: { select: { title: 'title', subtitle: 'id' } }
            }]
        }),

        // CTA Section
        defineField({ name: 'ctaTitle', title: 'Titre CTA', type: 'string', group: 'cta', initialValue: 'Un besoin spécifique ?' }),
        defineField({ name: 'ctaDescription', title: 'Description CTA', type: 'text', group: 'cta' }),
        defineField({ name: 'ctaButtonText', title: 'Texte du bouton CTA', type: 'string', group: 'cta', initialValue: 'Contactez-nous' }),
    ],
    preview: {
        prepare() {
            return { title: 'Page Prestations' }
        }
    }
})

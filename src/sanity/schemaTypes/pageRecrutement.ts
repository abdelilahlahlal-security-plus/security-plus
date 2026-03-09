import { defineField, defineType } from 'sanity'

export const pageRecrutement = defineType({
    name: 'pageRecrutement',
    title: 'Page Recrutement',
    type: 'document',
    groups: [
        { name: 'header', title: '🏷️ En-tête' },
        { name: 'career', title: '💼 Carrière' },
        { name: 'offers', title: '📋 Offres' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),

        defineField({ name: 'headerTitle', title: 'Titre de la page', type: 'string', group: 'header' }),
        defineField({ name: 'headerDescription', title: 'Description de la page', type: 'text', group: 'header' }),
        defineField({ name: 'headerImage', title: 'Image de fond (Header)', type: 'image', group: 'header' }),

        defineField({ name: 'careerTitle', title: 'Titre de la section "Pourquoi nous rejoindre ?"', type: 'string', group: 'career' }),
        defineField({ name: 'careerDescription', title: 'Texte descriptif carrière', type: 'text', group: 'career' }),
        defineField({
            name: 'careerAdvantages',
            title: 'Liste des avantages',
            type: 'array',
            group: 'career',
            of: [{ type: 'string' }]
        }),

        defineField({
            name: 'recruitmentProcess',
            title: 'Processus de Recrutement (Étapes)',
            type: 'array',
            group: 'career',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', title: 'Titre de l\'étape', type: 'string' },
                    { name: 'description', title: 'Description de l\'étape', type: 'string' },
                    {
                        name: 'iconName',
                        title: 'Nom de l\'icône (Lucide)',
                        type: 'string',
                        description: 'Ex: FileText, UserCheck, Briefcase, CheckCircle'
                    }
                ]
            }]
        }),

        defineField({
            name: 'jobOffers',
            title: 'Offres d\'emploi Actuelles',
            type: 'array',
            group: 'offers',
            of: [{
                type: 'object',
                fields: [
                    { name: 'id', title: 'Référence de l\'offre (ex: SEC-33-01)', type: 'string' },
                    { name: 'title', title: 'Titre du poste', type: 'string' },
                    { name: 'location', title: 'Lieu (ex: Bordeaux)', type: 'string' },
                    { name: 'type', title: 'Type de contrat (ex: CDI - Temps plein)', type: 'string' }
                ]
            }]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Page Recrutement' }
        }
    }
})

import { defineField, defineType } from 'sanity'
import { PasswordInput } from '../components/PasswordInput'


export const settings = defineType({
    name: 'settings',
    title: 'Paramètres du Site',
    type: 'document',
    groups: [
        { name: 'general', title: 'Général' },
        { name: 'contact', title: 'Contact' },
        { name: 'navigation', title: 'Navigation & Footer' },
        { name: 'floating', title: 'Bouton Flottant' },
        { name: 'smtp', title: 'Configuration SMTP' },
    ],
    fields: [
        defineField({ name: 'siteTitle', title: 'Nom du site', type: 'string', group: ['general', 'navigation'] }),
        defineField({ name: 'description', title: 'Description (SEO & Footer)', type: 'text', group: ['general', 'navigation'] }),
        defineField({ name: 'headerLogo', title: 'Logo (Header)', type: 'image', group: ['general', 'navigation'] }),
        defineField({ name: 'footerLogo', title: 'Logo (Footer)', type: 'image', group: ['general', 'navigation'] }),
        defineField({
            name: 'navigation',
            title: 'Menu de Navigation (Header)',
            type: 'array',
            group: 'navigation',
            of: [{
                type: 'object',
                fields: [
                    { name: 'name', title: 'Nom du lien', type: 'string' },
                    { name: 'href', title: 'URL/Lien', type: 'string' }
                ]
            }]
        }),
        defineField({ name: 'cnaps', title: 'Numéro CNAPS', type: 'string', group: ['general', 'navigation'] }),

        defineField({ name: 'phone', title: 'Téléphone affiché', type: 'string', group: 'contact' }),
        defineField({ name: 'email', title: 'Email de contact', type: 'string', group: 'contact' }),
        defineField({ name: 'address', title: 'Adresse postale', type: 'text', group: 'contact' }),

        defineField({
            name: 'smtp_host',
            title: 'Host SMTP',
            type: 'string',
            group: 'smtp',
            description: 'IONOS: smtp.ionos.fr | Hostinger: smtp.hostinger.com'
        }),
        defineField({
            name: 'smtp_port',
            title: 'Port SMTP',
            type: 'number',
            group: 'smtp',
            initialValue: 465,
            description: '465 (SSL - Recommandé) ou 587 (TLS/STARTTLS)'
        }),
        defineField({
            name: 'smtp_user',
            title: 'Utilisateur SMTP',
            type: 'string',
            group: 'smtp',
            description: 'Votre adresse email complète (ex: contact@votre-domaine.fr)'
        }),
        defineField({
            name: 'smtp_pass',
            title: 'Mot de passe SMTP',
            type: 'string',
            group: 'smtp',
            description: 'Le mot de passe de votre compte email',
            components: {
                input: PasswordInput
            }
        }),
        defineField({
            name: 'from_email',
            title: 'Email expéditeur (From)',
            type: 'string',
            group: 'smtp',
            description: 'L\'adresse affichée comme expéditeur (généralement la même que l\'utilisateur)'
        }),
        defineField({
            name: 'to_email',
            title: 'Email destinataire (To)',
            type: 'string',
            group: 'smtp',
            description: 'L\'adresse qui recevra les notifications (ex: votre adresse pro)'
        }),

        defineField({
            name: 'socialLinks',
            title: 'Réseaux sociaux',
            type: 'array',
            group: ['contact', 'navigation'],
            of: [{
                type: 'object',
                fields: [
                    { name: 'platform', title: 'Plateforme', type: 'string', options: { list: ['facebook', 'linkedin', 'instagram', 'twitter'] } },
                    { name: 'url', title: 'Lien', type: 'url' }
                ]
            }]
        }),

        defineField({
            name: 'footerServicesLinks', title: 'Liens Services (Footer)', type: 'array', group: 'navigation',
            of: [{ type: 'object', fields: [{ name: 'name', type: 'string' }, { name: 'href', type: 'string' }] }]
        }),
        defineField({
            name: 'footerCompanyLinks', title: 'Liens Société (Footer)', type: 'array', group: 'navigation',
            of: [{ type: 'object', fields: [{ name: 'name', type: 'string' }, { name: 'href', type: 'string' }] }]
        }),
        defineField({
            name: 'footerLegalLinks', title: 'Liens Légaux (Footer)', type: 'array', group: 'navigation',
            of: [{ type: 'object', fields: [{ name: 'name', type: 'string' }, { name: 'href', type: 'string' }] }]
        }),
        defineField({
            name: 'floatingButtonColor',
            title: 'Couleur du bouton flottant',
            type: 'string',
            group: 'floating',
            description: 'Couleur de fond (ex: #003366 ou une classe Tailwind comme bg-primary)'
        }),
        defineField({
            name: 'floatingButtonActions',
            title: 'Actions du bouton flottant',
            type: 'array',
            group: 'floating',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', title: 'Libellé', type: 'string' },
                    { name: 'href', title: 'Lien/URL', type: 'string' },
                    {
                        name: 'iconName',
                        title: 'Icône',
                        type: 'string',
                        description: 'Nom de l\'icône Lucide (Phone, FileText, etc.)'
                    },
                    { name: 'iconBgColor', title: 'Couleur de fond de l\'icône', type: 'string' },
                    { name: 'iconColor', title: 'Couleur de l\'icône', type: 'string' }
                ]
            }]
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Paramètres du Site' }
        }
    }
})


'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { media } from 'sanity-plugin-media'

// Define the structure builder
const structure = (S: any) =>
    S.list()
        .title('Contenu')
        .items([
            // Singleton Settings
            S.listItem()
                .title('Paramètres Globaux')
                .icon(() => '⚙️')
                .child(
                    S.document()
                        .schemaType('settings')
                        .documentId('settings')
                ),
            S.divider(),
            // Page d'accueil (Direct Editor)
            S.listItem()
                .title('Page d\'Accueil')
                .icon(() => '🏠')
                .child(
                    S.document()
                        .schemaType('pageHome')
                        .documentId('pageHome')
                ),
            S.divider(),
            S.listItem()
                .title('Articles Blog')
                .icon(() => '📝')
                .child(
                    S.documentList()
                        .title('Articles')
                        .filter('_type == "post"')
                ),
            S.listItem()
                .title('Catégories')
                .icon(() => '🏷️')
                .child(
                    S.documentList()
                        .title('Catégories')
                        .filter('_type == "category"')
                ),
            S.divider(),
            // Pages Spécifiques (Singletons)
            S.listItem()
                .title('Page Contact')
                .icon(() => '📞')
                .child(
                    S.document()
                        .schemaType('pageContact')
                        .documentId('contact')
                ),
            S.listItem()
                .title('Page Nos Prestations')
                .icon(() => '🛠️')
                .child(
                    S.document()
                        .schemaType('pagePrestations')
                        .documentId('nos-prestations')
                ),
            S.listItem()
                .title('Page Qui Sommes-Nous')
                .icon(() => '🤝')
                .child(
                    S.document()
                        .schemaType('pageAbout')
                        .documentId('about')
                ),
            S.listItem()
                .title('Page Devis')
                .icon(() => '📄')
                .child(
                    S.document()
                        .schemaType('pageDevis')
                        .documentId('devis')
                ),
            S.listItem()
                .title('Page Recrutement')
                .icon(() => '💼')
                .child(
                    S.document()
                        .schemaType('pageRecrutement')
                        .documentId('recrutement')
                ),
            S.divider(),
            // Pages Légales (Type 'page' with fixed IDs)
            S.listItem()
                .title('Mentions Légales')
                .icon(() => '⚖️')
                .child(
                    S.document()
                        .schemaType('page')
                        .documentId('mentions-legales')
                ),
            S.listItem()
                .title('Politique de Confidentialité')
                .icon(() => '🛡️')
                .child(
                    S.document()
                        .schemaType('page')
                        .documentId('politique-de-confidentialite')
                ),
            S.listItem()
                .title('CGV')
                .icon(() => '📜')
                .child(
                    S.document()
                        .schemaType('page')
                        .documentId('cgv')
                ),
            S.divider(),
            // Autres Pages
            S.listItem()
                .title('Autres Pages (Génériques)')
                .icon(() => '📂')
                .child(
                    S.documentTypeList('page')
                        .title('Pages')
                        .filter('_type == "page" && !(_id in ["mentions-legales", "politique-de-confidentialite", "cgv"])')
                ),
            /* Commented out as these types are not fully implemented/defined yet
            S.divider(),
            // Données de sections / Collections
            S.listItem()
                .title('📦 Collections de Données')
                .child(
                    S.list()
                        .title('Données partagées')
                        .items([
                            S.documentTypeListItem('service').title('🛡️ Services'),
                            S.documentTypeListItem('feature').title('⭐ Avantages'),
                            S.documentTypeListItem('sector').title('🏭 Secteurs d\'Activité'),
                            S.documentTypeListItem('testimonial').title('💬 Témoignages'),
                            S.documentTypeListItem('faq').title('❓ FAQ'),
                            S.documentTypeListItem('department').title('📍 Départements (Carte)'),
                        ])
                ),
            */
        ])

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool({ structure }), // Use custom structure
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        media(),
    ],
})

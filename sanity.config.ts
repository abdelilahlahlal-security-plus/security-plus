
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
                .title('⚙️ Paramètres Globaux')
                .child(
                    S.document()
                        .schemaType('settings')
                        .documentId('settings')
                ),
            S.divider(),
            // Page d'accueil
            S.listItem()
                .title('🏠 Page d\'Accueil')
                .child(
                    S.list()
                        .title('Sections de la page d\'accueil')
                        .items([
                            S.documentTypeListItem('service').title('🛡️ Services'),
                            S.documentTypeListItem('feature').title('⭐ Avantages'),
                            S.documentTypeListItem('sector').title('🏭 Secteurs d\'Activité'),
                            S.documentTypeListItem('testimonial').title('💬 Témoignages'),
                            S.documentTypeListItem('faq').title('❓ FAQ'),
                            S.documentTypeListItem('department').title('📍 Départements (Carte)'),
                        ])
                ),
            S.divider(),
            // Blog
            S.documentTypeListItem('post').title('📝 Articles Blog'),
            S.documentTypeListItem('category').title('🏷️ Catégories'),
            S.divider(),
            // Pages
            S.documentTypeListItem('page').title('📄 Pages'),
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

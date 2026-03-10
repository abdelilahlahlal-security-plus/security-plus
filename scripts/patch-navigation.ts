import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '0ujrhive',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

async function patchNavigation() {
    try {
        // Get current settings
        const settings = await client.fetch(`*[_type == "settings"][0]`);
        console.log('Current settings found:', !!settings);

        if (!settings) {
            console.log('No settings document found');
            return;
        }

        // --- Patch main navigation ---
        const currentNav = settings.navigation || [];
        console.log('Current navigation items:', currentNav.map((n: any) => n.name));

        const hasSecteursInNav = currentNav.some((item: any) =>
            item.href === '/secteurs-activites' || item.name?.includes('Secteurs')
        );

        if (!hasSecteursInNav) {
            // Find the index of "Nos Prestations" to insert after it
            const nosPrestationsIndex = currentNav.findIndex((item: any) =>
                item.href === '/nos-prestations' || item.name?.includes('Prestations')
            );
            const insertIndex = nosPrestationsIndex >= 0 ? nosPrestationsIndex + 1 : 2;

            const newNav = [
                ...currentNav.slice(0, insertIndex),
                {
                    _key: 'secteurs-nav-' + Date.now(),
                    _type: 'navItem',
                    name: "Secteurs d'Activité",
                    href: '/secteurs-activites',
                },
                ...currentNav.slice(insertIndex),
            ];

            await client.patch(settings._id).set({ navigation: newNav }).commit();
            console.log('✅ Navigation updated! "Secteurs d\'Activité" added after "Nos Prestations"');
        } else {
            console.log('ℹ️ Navigation already contains "Secteurs d\'Activité"');
        }

        // --- Patch footer company links ---
        const currentCompany = settings.footerCompanyLinks || [];
        console.log('Current footer company links:', currentCompany.map((n: any) => n.name));

        const hasSecteursInFooter = currentCompany.some((item: any) =>
            item.href === '/secteurs-activites' || item.name?.includes('Secteurs')
        );

        if (!hasSecteursInFooter) {
            const newCompany = [
                {
                    _key: 'secteurs-footer-' + Date.now(),
                    _type: 'navItem',
                    name: "Secteurs d'Activité",
                    href: '/secteurs-activites',
                },
                ...currentCompany,
            ];

            await client.patch(settings._id).set({ footerCompanyLinks: newCompany }).commit();
            console.log('✅ Footer company links updated! "Secteurs d\'Activité" added');
        } else {
            console.log('ℹ️ Footer already contains "Secteurs d\'Activité"');
        }

        console.log('\n🎉 Done!');
    } catch (error) {
        console.error('Error:', error);
    }
}

patchNavigation();

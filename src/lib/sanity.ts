import { createClient, type QueryParams } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

// Définir ces valeurs en fonction de votre configuration Sanity
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    revalidate = 3600,
    tags = [],
}: {
    query: string;
    params?: QueryParams;
    revalidate?: number | false;
    tags?: string[];
}) {
    return client.fetch<QueryResponse>(query, params, {
        next: {
            revalidate: tags.length > 0 ? false : revalidate,
            tags,
        },
    });
}

// --- TYPES ---

export type SanityImage = {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
}

export type SanitySeo = {
    title?: string
    description?: string
    image?: SanityImage
    noIndex?: boolean
}

// 1. Settings globaux
export type SanitySettings = {
    title?: string
    siteTitle?: string
    description?: string
    headerLogo?: SanityImage
    footerLogo?: SanityImage
    phone?: string
    email?: string
    address?: string
    navigation?: { name: string; href: string }[]
    socialLinks?: { platform: string; url: string }[]
    footerServicesLinks?: { name: string; href: string }[]
    footerCompanyLinks?: { name: string; href: string }[]
    footerLegalLinks?: { name: string; href: string }[]
    floatingButtonColor?: string
    floatingButtonActions?: {
        label: string
        href: string
        iconName?: string
        iconBgColor?: string
        iconColor?: string
    }[]
    cnaps?: string
    smtp_host?: string
    smtp_port?: number
    smtp_user?: string
    smtp_pass?: string
    from_email?: string
    to_email?: string
}

// 2. Page Accueil
export type SanityPageHome = {
    seo?: SanitySeo
    heroTitle?: string
    heroSubtitle1?: string
    heroSubtitle2?: string
    heroDescription?: string
    heroImage?: SanityImage
    servicesSubtitle?: string
    servicesTitle?: string
    servicesDescription?: string
    services?: {
        title: string
        description: string
        iconName?: string
        href?: string
        color?: string
    }[]
    featuresSubtitle?: string
    featuresTitle?: string
    featuresDescription?: string
    featuresStatValue?: string
    featuresStatLabel?: string
    features?: {
        title: string
        description: string
        iconName?: string
    }[]
    sectorsSubtitle?: string
    sectorsTitle?: string
    sectors?: {
        name: string
        description: string
        iconName?: string
        image?: SanityImage
    }[]
    testimonials?: {
        content: string
        author: string
        date?: string
        rating?: number
        keywords?: string
    }[]
    testimonialsRating?: string
    testimonialsLink?: string
    mapSubtitle?: string
    mapTitle?: string
    mapDescription?: string
    mapDepartments?: {
        id: string
        name?: string
        sitesCount?: number
        agentsCount?: number
        clientsCount?: number
    }[]
    faqs?: {
        question: string
        answer: string
    }[]
    ctaTitle?: string
    ctaDescription?: string
    ctaButtonText?: string
    ctaPhoneText?: string
}

// 3. Page Prestations
export type SanityPagePrestations = {
    seo?: SanitySeo
    headerTitle?: string
    headerDescription?: string
    headerImage?: SanityImage
    prestations?: {
        id: string
        title: string
        description: string
        content?: string
        iconName: string
        image: SanityImage
        features: string[]
    }[]
    ctaTitle?: string
    ctaDescription?: string
    ctaButtonText?: string
}


// 4. Page Qui Sommes-Nous
export type SanityPageAbout = {
    seo?: SanitySeo
    headerTitle?: string
    headerDescription?: string
    headerImage?: SanityImage
    storySubtitle?: string
    storyTitle?: string
    storyContent?: any[]
    storyImage?: SanityImage
    valuesSubtitle?: string
    valuesTitle?: string
    values?: {
        title: string
        description: string
    }[]
    certificationLabel?: string
    certificationPrefix?: string
    certificationNumber?: string
}


// 5. Page Contact
export type SanityPageContact = {
    seo?: SanitySeo
    headerTitle?: string
    headerDescription?: string
    headerImage?: SanityImage
    contactInfoText?: string
    officeHours?: string
    zoneIntervention?: string
    googleMapUrl?: string
}

// 6. Page Devis
export type SanityPageDevis = {
    seo?: SanitySeo
    headerTitle?: string
    headerDescription?: string
    headerImage?: SanityImage
}

// 7. Page Recrutement
export type SanityPageRecrutement = {
    seo?: SanitySeo
    headerTitle?: string
    headerDescription?: string
    headerImage?: SanityImage
    careerTitle?: string
    careerDescription?: string
    careerAdvantages?: string[]
    recruitmentProcess?: {
        title: string
        description: string
        iconName?: string
    }[]
    jobOffers?: {
        id: string
        title: string
        location: string
        type: string
    }[]
}

// --- FETCHERS ---

export async function getSettings() {
    return sanityFetch<SanitySettings | null>({
        query: `*[_type == "settings"][0]`,
        tags: ['settings']
    })
}

export async function getPageHome() {
    return sanityFetch<SanityPageHome | null>({
        query: `*[_type == "pageHome"][0]`,
        tags: ['pageHome']
    })
}

export async function getPagePrestations() {
    return sanityFetch<SanityPagePrestations | null>({
        query: `*[_type == "pagePrestations"][0]`,
        tags: ['pagePrestations']
    })
}

export async function getPageAbout() {
    return sanityFetch<SanityPageAbout | null>({
        query: `*[_type == "pageAbout"][0]`,
        tags: ['pageAbout']
    })
}

export async function getPageContact() {
    return sanityFetch<SanityPageContact | null>({
        query: `*[_type == "pageContact"][0]`,
        tags: ['pageContact']
    })
}

export async function getPageDevis() {
    return sanityFetch<SanityPageDevis | null>({
        query: `*[_type == "pageDevis"][0]`,
        tags: ['pageDevis']
    })
}

export async function getPageRecrutement() {
    return sanityFetch<SanityPageRecrutement | null>({
        query: `*[_type == "pageRecrutement"][0]`,
        tags: ['pageRecrutement']
    })
}

// 8. Generic Page
export type SanityPage = {
    title?: string
    slug?: { current: string }
    body?: any[]
    seo?: SanitySeo
}

export async function getPageBySlug(slug: string) {
    return sanityFetch<SanityPage | null>({
        query: `*[_type == "page" && slug.current == $slug][0]`,
        params: { slug },
        tags: [`page:${slug}`]
    })
}

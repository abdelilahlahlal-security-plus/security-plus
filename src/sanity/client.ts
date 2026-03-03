import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from './env'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Use false for server-side fetching to get fresh data
    token: process.env.SANITY_API_READ_TOKEN, // Optional: if you need to read private data
})

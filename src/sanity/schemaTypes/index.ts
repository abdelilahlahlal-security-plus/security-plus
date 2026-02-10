import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { category } from './category'
import { page } from './page'
import { settings } from './settings'
import { service } from './service'
import { feature } from './feature'
import { sector } from './sector'
import { testimonial } from './testimonial'
import { faq } from './faq'
import { department } from './department'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, category, page, settings, service, feature, sector, testimonial, faq, department],
}

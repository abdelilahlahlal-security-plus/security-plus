import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { category } from './category'

import { seo } from './objects/seo'
import { settings } from './settings'
import { pageHome } from './pageHome'
import { pagePrestations } from './pagePrestations'
import { pageAbout } from './pageAbout'
import { pageContact } from './pageContact'
import { pageDevis } from './pageDevis'
import { pageRecrutement } from './pageRecrutement'
import { page } from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        post,
        category,
        seo,
        settings,
        pageHome,
        pagePrestations,
        pageAbout,
        pageContact,
        pageDevis,
        pageRecrutement,
        page
    ],
}

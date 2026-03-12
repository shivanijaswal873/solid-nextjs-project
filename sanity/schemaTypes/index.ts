import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import menu from './menu'
import hero from './hero'
// import integration from './integration'
// import feature from './feature'
// import about from './about'
// import featureTab from './featureTab'
// import funFact from './funFact'
// import cta from './cta'
import page from "./page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, page, menu, hero, 
    // integration,
    //  feature, about, featureTab,
    // funFact, cta
  ],
}

import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import menu from './menu'
import hero from './hero'
import integration from './integration'
import feature from './feature'
import about from './about'
import featureTab from './featureTab'
import funFact from './funFact'
import cta from './cta'
import page from "./page";
import Brand from './brand'
import faqData from './faqSection'
import pricingSection from './pricingSection'
import testimonialSection from './testimonialSection'
import contactUs from './contactUs'
import blog from './blog'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, page, menu, hero, Brand, integration,
    feature, about, featureTab,funFact,cta,faqData, testimonialSection,pricingSection,contactUs,blog  
  ],
}

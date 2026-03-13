

import { defineType, defineField } from "sanity";

export default defineType({
  name: "pricingSection",
  title: "Pricing Section",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "plans",
      title: "Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Plan Name" },
            { name: "price", type: "number", title: "Price" },
            { name: "duration", type: "string", title: "Duration" },
            { name: "description", type: "text", title: "Description" },
            { name: "popular", type: "boolean", title: "Popular" },
            { name: "buttonText", type: "string", title: "Button Text" },
            {
              name: "features",
              type: "array",
              title: "Features",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", type: "string", title: "Feature" },
                    { name: "disabled", type: "boolean", title: "Disabled" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })
  ]
});
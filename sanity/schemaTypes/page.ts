import { defineType, defineField } from "sanity";


export default defineType({
  name: "page",
  title: "Page",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",

      of: [
        {type:"menu"},
        { type: "hero" },
        { type: "integration" },
        { type: "featureSection" },
        { type: "aboutSection" },
        { type: "ctaSection" },
        { type: "funFactSection" },
      ],
    }),
  ],
});
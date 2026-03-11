import { defineType, defineField } from "sanity";

export default defineType({
  name: "integration",
  title: "Integration Section",
  type: "document",

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
      name: "brands",
      title: "Brand Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "logo",
              title: "Logo",
              type: "image",
            },
          ],
        },
      ],
    }),
  ],
});
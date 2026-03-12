import { defineType, defineField } from "sanity";

export default defineType({
  name: "brands",
  title: "Brands Section",
  type: "object",

  fields: [
    defineField({
      name: "brands",
      title: "Brand List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [

            {
              name: "href",
              title: "Link",
              type: "string",
            },

            {
              name: "image",
              title: "Light Logo",
              type: "image",
            },

            {
              name: "imageDark",
              title: "Dark Logo",
              type: "image",
            },

          ],
        },
      ],
    }),
  ],
});
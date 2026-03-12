import { defineType, defineField } from "sanity";

export default defineType({
  name: "integration",
  title: "Integration Section",
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
      name: "dottedLight",
      title: "Dotted Light Image",
      type: "image",
    }),

    defineField({
      name: "dottedDark",
      title: "Dotted Dark Image",
      type: "image",
    }),

    defineField({
      name: "items",
      title: "Integration Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [

            {
              name: "type",
              title: "Item Type",
              type: "string",
              options: {
                list: [
                  { title: "Brand Logo", value: "logo" },
                  { title: "Color Dot", value: "dot" },
                  { title: "Empty Space", value: "empty" }
                ]
              }
            },

            {
              name: "logo",
              title: "Logo",
              type: "image",
            },

            {
              name: "dotColor",
              title: "Dot Color",
              type: "string",
              description: "Example: #FFDB26",
            },

            {
              name: "dotSize",
              title: "Dot Size",
              type: "number",
              description: "Example: 11 , 15 , 23",
            }

          ]
        }
      ]
    })

  ]
});
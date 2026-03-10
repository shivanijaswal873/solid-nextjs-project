import { defineType, defineField } from "sanity"

export default defineType({
  name: "menu",
  title: "Menu",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),

    defineField({
      name: "path",
      title: "Path",
      type: "string"
    }),

    defineField({
      name: "submenu",
      title: "Sub Menu",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "path", type: "string" }
          ]
        }
      ]
    })
  ]
})
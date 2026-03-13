import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "object",

  fields: [

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string"
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),

    defineField({
      name: "highlightText",
      title: "Highlight Text",
      type: "string"
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string"
    }),

    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string"
    }),

    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "quest", type: "string", title: "Question" },
            { name: "ans", type: "text", title: "Answer" }
          ]
        }
      ]
    })

  ]
});
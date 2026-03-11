import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",

  fields: [
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
    }),

    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
    }),

    defineField({
      name: "highlightText",
      title: "Highlight Text",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "placeholder",
      title: "Email Placeholder",
      type: "string",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),

    defineField({
      name: "bottomText",
      title: "Bottom Text",
      type: "string",
    }),

    defineField({
      name: "heroImageLight",
      title: "Hero Image Light",
      type: "image",
    }),

    defineField({
      name: "heroImageDark",
      title: "Hero Image Dark",
      type: "image",
    }),
  ],
});
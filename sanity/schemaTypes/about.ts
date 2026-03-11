import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",

  fields: [
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
    }),

    defineField({
      name: "heading",
      title: "Heading",
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
      name: "imageLight",
      title: "Image Light",
      type: "image",
    }),

    defineField({
      name: "imageDark",
      title: "Image Dark",
      type: "image",
    }),

    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", title: "Number", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "secondTitle",
      title: "Second Section Title",
      type: "string",
    }),

    defineField({
      name: "secondHeading",
      title: "Second Heading",
      type: "string",
    }),

    defineField({
      name: "secondHighlight",
      title: "Second Highlight",
      type: "string",
    }),

    defineField({
      name: "secondDescription",
      title: "Second Description",
      type: "text",
    }),

    defineField({
      name: "secondImageLight",
      title: "Second Image Light",
      type: "image",
    }),

    defineField({
      name: "secondImageDark",
      title: "Second Image Dark",
      type: "image",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),

    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    }),
  ],
});
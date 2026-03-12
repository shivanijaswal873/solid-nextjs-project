import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",

  fields: [
    defineField({
      name: "badge",
      title: "Badge",
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
      title: "Light Image",
      type: "image",
    }),

    defineField({
      name: "imageDark",
      title: "Dark Image",
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
      title: "Second Title",
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
      title: "Second Light Image",
      type: "image",
    }),

    defineField({
      name: "secondImageDark",
      title: "Second Dark Image",
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
import { defineType, defineField } from "sanity";

export default defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },

    {
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    },

    {
      name: "image",
      title: "CTA Image",
      type: "image",
    },

    {
      name: "arrowLight",
      title: "Arrow Light Icon",
      type: "image",
    },

    {
      name: "arrowDark",
      title: "Arrow Dark Icon",
      type: "image",
    }
  ],
});
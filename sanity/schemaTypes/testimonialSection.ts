import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonialSection",
  title: "Testimonial Section",
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "designation",
              title: "Designation",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "text",
            },
            {
              name: "image",
              title: "User Image",
              type: "image",
            },
          ],
        },
      ],
    }),
  ],
});
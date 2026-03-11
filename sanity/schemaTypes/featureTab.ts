import { defineType, defineField } from "sanity";

export default defineType({
  name: "featuresTabSection",
  title: "Features Tab Section",
  type: "document",

  fields: [
    defineField({
      name: "tabs",
      title: "Tabs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "id",
              title: "Tab ID",
              type: "string",
            },
            {
              name: "tabTitle",
              title: "Tab Title",
              type: "string",
            },
            {
              name: "title",
              title: "Heading",
              type: "string",
            },
            {
              name: "desc1",
              title: "Description 1",
              type: "text",
            },
            {
              name: "desc2",
              title: "Description 2",
              type: "text",
            },
            {
              name: "image",
              title: "Light Image",
              type: "image",
            },
            {
              name: "imageDark",
              title: "Dark Image",
              type: "image",
            },
          ],
        },
      ],
    }),
  ],
});
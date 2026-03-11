import { defineType, defineField } from "sanity";

export default defineType({
  name: "menu",
  title: "Menu",
  type: "document",

  fields: [

    defineField({
      name: "id",
      title: "ID",
      type: "number",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "path",
      title: "Path",
      type: "string",
    }),

    defineField({
      name: "newTab",
      title: "Open In New Tab",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "submenu",
      title: "Sub Menu",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "id",
              title: "ID",
              type: "number",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "path",
              title: "Path",
              type: "string",
            },
            {
              name: "newTab",
              title: "Open In New Tab",
              type: "boolean",
              initialValue: false,
            },
          ],
        },
      ],
    }),

    defineField({
      name: "logoLight",
      title: "Logo Light",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "logoDark",
      title: "Logo Dark",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "githubLink",
      title: "GitHub Link",
      type: "url",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),

    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "url",
    }),

  ],
});
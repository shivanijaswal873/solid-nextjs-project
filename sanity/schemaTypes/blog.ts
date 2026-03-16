import { defineType, defineField } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "metadata",
      title: "Short Description",
      type: "text",
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),

    defineField({
      name: "content",
      title: "Blog Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
});
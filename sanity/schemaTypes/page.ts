import { defineType, defineField } from "sanity";


export default defineType({
    name: "page",
    title: "Page",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),

        defineField({
            name: "sections",
            title: "Page Sections",
            type: "array",

            of: [
                { type: "menu" },
                { type: "hero" },
                { type: "brands" },
                { type: "featureSection" },
                { type: "aboutSection" },
                { type: "featuresTabSection" },
                { type: "funFactSection" },
                { type: "integration" },
                { type: "ctaSection" },
                {type:"faqSection"},
                {type:"testimonialSection"}
                // { type: "integration" },
                // { type: "featureSection" },

                // { type: "ctaSection" },
                // { type: "funFactSection" },
            ],
        }),
    ],
});
import { defineType, defineField } from "sanity";

export default defineType({
    name: "funFactSection",
    title: "Fun Fact Section",
    type: "document",

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
            name: "leftImage",
            title: "Left Shape Image",
            type: "image",
        },

        {
            name: "rightImage",
            title: "Right Shape Image",
            type: "image",
        },

        {
            name: "dottedLight",
            title: "Dotted Light Image",
            type: "image",
        },

        {
            name: "dottedDark",
            title: "Dotted Dark Image",
            type: "image",
        },

        {
            name: "facts",
            title: "Facts",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "number", title: "Number", type: "string" },
                        { name: "label", title: "Label", type: "string" },
                    ],
                },
            ],
        },
    ],
});
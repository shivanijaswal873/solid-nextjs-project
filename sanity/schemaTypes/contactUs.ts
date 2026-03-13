import { defineType, defineField } from "sanity";

export default defineType({
    name: "contactSection",
    title: "Contact Section",
    type: "object",

    fields: [
        defineField({
            name: "formTitle",
            title: "Form Title",
            type: "string"
        }),

        defineField({
            name: "formAction",
            title: "Form Action URL",
            type: "string"
        }),
        defineField({
            name: "checkboxText",
            title: "Checkbox Text",
            type: "text"
        }),
        defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string"
        }),

        defineField({
            name: "infoTitle",
            title: "Info Title",
            type: "string"
        }),

        defineField({
            name: "locationTitle",
            title: "Location Title",
            type: "string"
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string"
        }),

        defineField({
            name: "emailTitle",
            title: "Email Title",
            type: "string"
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string"
        }),

        defineField({
            name: "phoneTitle",
            title: "Phone Title",
            type: "string"
        }),
        defineField({
            name: "phone",
            title: "Phone",
            type: "string"
        }),
    ],
});
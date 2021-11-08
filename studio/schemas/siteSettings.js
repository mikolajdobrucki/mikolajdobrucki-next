/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "SEO Description",
      type: "string",
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "socialMedia",
      title: "Social media",
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
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "sketchbook",
      title: "Sketchbook",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // <-- Defaults to false
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
            },
          ],
        },
      ],
    },
  ],
};

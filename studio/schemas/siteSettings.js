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
      type: "text",
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
  ],
};
/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "publication",
      title: "Publication",
      type: "string",
      options: {
        list: [
          { title: "Smashing Magazine", value: "Smashing Magazine" },
          { title: "CSS Tricks", value: "CSS Tricks" },
          { title: "UX Collective", value: "UX Collective" },
        ],
      },
    },
    {
      name: "datePublished",
      title: "Date published",
      type: "date",
    },
    {
      name: "url",
      title: "URL to the article",
      type: "url",
    },
  ],
};

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "article",
  title: "Article",
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
          { title: "Smashing Magazine", value: "smashingmag" },
          { title: "CSS Tricks", value: "csstricks" },
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

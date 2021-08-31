/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "talk",
  title: "Conference talks",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "conference",
      title: "Conference",
      type: "string",
    },
    {
      name: "image",
      title: "Image cover",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "url",
      title: "URL to the article",
      type: "url",
    },
  ],
};

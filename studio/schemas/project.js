/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "project",
  title: "Side project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "date",
      title: "Date created",
      type: "date",
    },
  ],
};

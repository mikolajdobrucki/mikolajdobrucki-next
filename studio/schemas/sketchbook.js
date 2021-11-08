/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "sketchbook",
  title: "Sketchbook",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
    },
  ],
};

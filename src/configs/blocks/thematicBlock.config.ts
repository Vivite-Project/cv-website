import { Block } from "payload";

const thematicBlock: Block = {
  slug: "thematicBlock",
  fields: [
    {
      name: "thematics",
      type: "array",
      required: true,
      minRows: 1,
      interfaceName: "Thematics",
      labels: {
        singular: "Thematic",
        plural: "Thematics",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true
        },
        {
          name: "articles",
          type: "array",
          required: true,
          minRows: 1,
          interfaceName: "Articles",
          labels: {
            singular: "Article",
            plural: "Articles",
          },
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default thematicBlock;

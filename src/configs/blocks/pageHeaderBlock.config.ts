import { Block } from "payload";

const pageHeaderBlock: Block = {
  slug: "PageHeaderBlock",
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
};

export default pageHeaderBlock;

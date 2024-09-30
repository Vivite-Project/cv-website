import { Block } from "payload";

const aboutBlock: Block = {
  slug: "AboutBlock",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "paragraphs",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 4,
      interfaceName: "Paragraphs",
      labels: {
        singular: "Paragraphs",
        plural: "Paragraph",
      },
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "socialNetworks",
      type: "array",
      interfaceName: "SocialNetworks",
      labels: {
        singular: "Social network",
        plural: "Social networks",
      },
      fields: [
        {
          name: "socialMedia",
          type: "select",
          label: "Social media",
          required: true,
          options: [
            {
              label: "Github",
              value: "github",
            },
            {
              label: "LinkedIn",
              value: "linkedin",
            },
          ],
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "email",
      type: "email",
    },
  ],
};

export default aboutBlock;

import { Block } from "payload";

const projectListBlock: Block = {
  slug: "projectListBlock",
  fields: [
    {
      name: "projects",
      type: "array",
      required: true,
      minRows: 1,
      interfaceName: "Projects",
      labels: {
        singular: "Project",
        plural: "Projects",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true
        },
        {
          name: "description",
          type: "text",
          required: true
        },
        {
          name: "link",
          type: "text",
          required: true
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          filterOptions: {
            mimeType: { contains: "image" },
          },
        },
      ],
    },
  ],
};

export default projectListBlock;

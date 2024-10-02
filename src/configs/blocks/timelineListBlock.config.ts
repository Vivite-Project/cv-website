import { Block } from "payload";

const timelineListBlock: Block = {
  slug: "timelineListBlock",
  fields: [
    {
      name: "timelines",
      type: "array",
      required: true,
      minRows: 1,
      interfaceName: "Timelines",
      labels: {
        singular: "Timeline",
        plural: "Timeline",
      },
      fields: [
        {
          name: "events",
          type: "array",
          required: true,
          minRows: 1,
          interfaceName: "Events",
          labels: {
            singular: "Event",
            plural: "Events",
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
            {
              name: "link",
              type: "text",
              required: true,
            },
            {
              name: "linkLabel",
              type: "text",
              required: true,
            },
            {
              name: "startDate",
              type: "date",
              required: true,
              admin: {
                date: {
                  pickerAppearance: "monthOnly",
                  displayFormat: "MMMM yyyy",
                },
              },
            },
            {
              name: "endDate",
              type: "date",
              required: true,
              admin: {
                date: {
                  pickerAppearance: "monthOnly",
                  displayFormat: "MMMM yyyy",
                },
              },
            },
          ],
        },
      ],
    },
  ],
};

export default timelineListBlock;

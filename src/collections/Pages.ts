import { CollectionConfig } from 'payload';

import aboutBlock from '@configs/blocks/aboutBlock.config';
import contactFormBlock from '@configs/blocks/contactFormBlock.config';
import pageHeaderBlock from '@configs/blocks/pageHeaderBlock.config';
import projectListBlock from '@configs/blocks/projectListBlock.config';
import thematicListBlock from '@configs/blocks/thematicListBlock.config';
import timelineListBlock from '@configs/blocks/timelineListBlock.config';

const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'inNavigation',
      type: 'checkbox',
      label: 'Include in the navigation',
      defaultValue: false,
      required: true,
    },
    {
      name: 'navigationOrder',
      type: 'number',
      label: "Navigation order",
      required: true,
      admin: {
        condition: (data) => {
          return data.inNavigation
        },
      }
    },
    {
      name: 'blocks', 
      type: 'blocks',
      blocks: [
        aboutBlock,
        contactFormBlock,
        pageHeaderBlock,
        projectListBlock,
        thematicListBlock,
        timelineListBlock
      ],
    },
  ],
};

export default Pages;
import { CollectionConfig } from 'payload';
import aboutBlock from '@configs/blocks/aboutBlock.config';
import pageHeaderBlock from '@configs/blocks/pageHeaderBlock.config';

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
      name: 'blocks', 
      type: 'blocks',
      blocks: [
        aboutBlock,
        pageHeaderBlock
      ],
    },
  ],
};

export default Pages;
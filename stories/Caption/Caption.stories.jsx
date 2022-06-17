import React from 'react';

import { Caption } from './Caption';

export default {
  title: 'Gov/Caption',
  component: Caption,
  argTypes: {
    size: {
      options: ['XL', 'L', 'M', 'S'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Caption {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

import React from 'react';

import { Tag } from './Tag';

export default {
  title: 'Gov/Tag',
  component: Tag,
  argTypes: {
    active: { control: 'boolean'},
    text: { control: 'text' },
  },
};

const Template = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  active: 'true',
  text: 'BETA',
};

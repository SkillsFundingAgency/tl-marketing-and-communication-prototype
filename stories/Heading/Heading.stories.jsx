import React from 'react';

import { Heading } from './Heading';
import { select } from 'nunjucks/src/filters'

export default {
  title: 'Gov/Heading',
  component: Heading,
  argTypes: {
    heading: { control: 'text' },
    size: {
      options: ['XL', 'L', 'M', 'S'],
      control: { type: 'select' },
    },
    level: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: select },
    }
  },
};

const Template = (args) => <Heading {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  heading: 'Example Heading',
};

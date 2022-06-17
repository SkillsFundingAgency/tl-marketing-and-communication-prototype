import React from 'react';

import { LeadParagraph } from './LeadParagraph';

export default {
  title: 'Gov/LeadParagraph',
  component: LeadParagraph,
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = (args) => <LeadParagraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Example Text',
};

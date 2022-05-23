import React from 'react';

import { LabelText } from './GovButton';

export default {
  title: 'Gov/LabelText',
  component: LabelText,
  argTypes: {
    label: { control: 'text' },
  },
};

const Template = (args) => <LabelText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Example Text',
};

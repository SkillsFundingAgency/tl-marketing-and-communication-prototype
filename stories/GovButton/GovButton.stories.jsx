import React from 'react';

import { ButtonGov } from './GovButton';

export default {
  title: 'Gov/Button',
  component: ButtonGov,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ButtonGov {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  enabled: true,
  start: false,
};

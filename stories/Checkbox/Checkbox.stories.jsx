import React from 'react';

import { CheckboxGov } from './Checkbox';

export default {
  title: 'Gov/Checkbox',
  component: CheckboxGov,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <CheckboxGov {...args} />;

export const Primary = Template.bind({});
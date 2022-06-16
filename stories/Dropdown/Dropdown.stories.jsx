import React from 'react';

import { Dropdown } from './Dropdown';

export default {
  title: 'Gov/Dropdown',
  component: Dropdown,
  argTypes: {
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

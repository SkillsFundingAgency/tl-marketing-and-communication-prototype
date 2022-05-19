import React from 'react';

import { HintText } from './HintText';

export default {
  title: 'Gov/HintText',
  component: HintText,
  argTypes: {
  },
};

const Template = (args) => <HintText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

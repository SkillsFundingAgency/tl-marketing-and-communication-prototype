import React from 'react';

import { ErrorText } from './ErrorText';

export default {
  title: 'Gov/ErrorText',
  component: ErrorText,
  argTypes: {
  },
};

const Template = (args) => <ErrorText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

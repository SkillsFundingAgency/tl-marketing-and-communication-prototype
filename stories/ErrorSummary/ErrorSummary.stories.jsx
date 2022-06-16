import React from 'react';

import { ErrorSummary } from './ErrorSummary';

export default {
  title: 'Gov/Button',
  component: ErrorSummary,
  argTypes: {
    heading: { control: 'text' },
  },
};

const Template = (args) => <ErrorSummary {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  heading: 'Example Heading',
};

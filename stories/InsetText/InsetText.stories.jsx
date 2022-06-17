import React from 'react';

import { InsetText } from './InsetText';

export default {
  title: 'Gov/InsetText',
  component: InsetText,
  argTypes: {
  },
};

const Template = (args) => <InsetText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

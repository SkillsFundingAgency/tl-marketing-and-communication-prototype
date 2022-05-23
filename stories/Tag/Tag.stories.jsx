import React from 'react';
import { Tag } from './Tag';

export default {
  title: 'Gov/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' },
    state: {
      control: { type: 'select' },
      options: ['Beta', 'Urgent', 'Active', 'Inactive', 'New', 'Pending', 'Received', 'Sent', 'Rejected', 'Declined', 'Delayed', 'Finished', 'Waiting On'],
    },
  },
};

const Template = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Beta',
}
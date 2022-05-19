import { Tag } from './Tag';

export default {
  title: 'Gov/Tag',
  argTypes: {
    active: { control: 'boolean' },
    text: { control: 'text' },
  },
};

const Template = ({ text, ...args }) => {
  return Tag({ text, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'BETA',
  active: 'true',
};

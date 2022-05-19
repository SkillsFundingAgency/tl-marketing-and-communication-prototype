import { createInput } from './Input'

export default {
  title: 'Gov/Input',
  argTypes: {
    error: 'boolean',
  },
};

const Template = ({ error, ...args }) => {
  return createInput({ error, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  error: false,
};

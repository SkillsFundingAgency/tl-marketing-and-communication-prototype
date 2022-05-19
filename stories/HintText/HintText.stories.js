import { HintText } from './HintText';

export default {
  title: 'Gov/HintText',
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = ({ text, ...args }) => {
  return HintText({ text, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Example Text',
};

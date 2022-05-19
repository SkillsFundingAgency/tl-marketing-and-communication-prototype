import { InsetText } from './InsetText';

export default {
  title: 'Gov/InsetText',
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = ({ text, ...args }) => {
  return InsetText({ text, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Example Text',
};

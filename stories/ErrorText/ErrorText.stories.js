import { ErrorText } from './ErrorText';

export default {
  title: 'Gov/InsetText',
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = ({ text, ...args }) => {
  return ErrorText({ text, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Example Text',
};

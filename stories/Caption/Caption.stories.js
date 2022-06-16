import { Caption } from './Caption';

export default {
  title: 'Gov/Caption',
  argTypes: {
    text: { control: 'text' },
    size: {
      options: ['XL', 'L', 'M', 'S'],
      control: { type: 'select' },
    }
  },
};

const Template = ({ text, ...args }) => {
  return Caption({ text, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Example Text',
};

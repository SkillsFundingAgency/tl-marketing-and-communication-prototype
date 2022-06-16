import { Heading } from './Heading';

export default {
  title: 'Gov/Heading',
  argTypes: {
    heading: { control: 'text' },
    size: {
      options: ['XL', 'L', 'M', 'S'],
      control: { type: 'select' },
    },
    level: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
  },
};

const Template = ({ size, heading, ...args }) => {
  return Heading({ size, heading, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  heading: 'Example Heading',
};

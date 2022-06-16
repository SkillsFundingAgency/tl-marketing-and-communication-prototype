import { LeadParagraph } from './LeadParagraph';

export default {
  title: 'Gov/LeadParagraph',
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = ({ text, ...args }) => {
  return LeadParagraph({ text, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Example Text',
};

import { LabelText } from './LabelText';

export default {
  title: 'Gov/LabelText',
  argTypes: {
    label: { control: 'text' },
  },
};

const Template = ({ label, ...args }) => {
  return LabelText({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Example Text',
};

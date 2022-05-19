import { Dropdown } from './Dropdown';

export default {
  title: 'Gov/Dropdown',
  argTypes: {
  },
};

const Template = ({ ...args }) => {
  return Dropdown({ ...args });
};

export const Primary = Template.bind({});
Primary.args = {
};

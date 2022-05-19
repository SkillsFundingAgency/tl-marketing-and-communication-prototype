import { createCheckbox } from './Checkbox';

export default {
  title: 'Gov/Checkbox',
  argTypes: {
    backgroundColor: { control: 'color' },
    small: { control: 'boolean' },
    onClick: { action: 'onClick' },
    value: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
  },
};

const Template = ({ ...args }) => {
  return createCheckbox({ ...args });
};

export const Primary = Template.bind({});
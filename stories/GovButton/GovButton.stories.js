import { createButton } from './GovButton';

export default {
  title: 'Gov/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    enabled: { control: 'boolean' },
    start: { control: 'boolean' },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  enabled: true,
  start: false,
};

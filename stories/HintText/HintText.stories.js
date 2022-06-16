import { createHint } from './HintText';

export default {
  title: 'Gov/HintText',
  argTypes: {
    hint: { control: 'text' },
    label: { control: 'text' },
  },
};

const Template = (args) => createHint(args);

export const Text = Template.bind({});
Text.args = {
  hint: 'Example Hint',
  label: 'Example Label'
};


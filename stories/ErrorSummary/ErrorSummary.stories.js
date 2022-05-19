import { createErrorSum } from './ErrorSummary';

export default {
  title: 'Gov/ErrorSummary',
  argTypes: {
    heading: { control: 'text' },
  },
};

const Template = ({ heading, ...args }) => {
  return createErrorSum({ heading, ...args });
};

export const Primary = Template.bind({});

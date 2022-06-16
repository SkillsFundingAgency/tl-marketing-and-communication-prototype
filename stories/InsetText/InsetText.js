import '../../public/stylesheets/application.css';

export const InsetText = ({
  text,
}) => {
  const inset = document.createElement('div');
  inset.innerText = text;
  inset.className = ['govuk-inset-text'].join(' ');

  return inset;
};

import '../../public/stylesheets/application.css';

export const HintText = ({
  text,
}) => {
  const hint = document.createElement('div');
  hint.innerText = text;
  hint.className = ['govuk-hint'].join(' ');

  return hint;
};

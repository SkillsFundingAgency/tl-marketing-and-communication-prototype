import '../../public/stylesheets/application.css';

export const LabelText = ({
  label,
}) => {
  const hint = document.createElement('label');
  hint.innerText = label;
  hint.className = ['govuk-label'].join(' ');

  return hint;
};

import '../../public/stylesheets/application.css';

export const createButton = ({
  primary = true,
  backgroundColor,
  label,
  onClick,
  enabled = true,
  start = false,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const state = enabled ? '' : 'govuk-button--disabled';
  const mode = primary ? '' : 'govuk-button--secondary';
  const large = !start ? '' : 'govuk-button--start';
  btn.className = ['govuk-button', mode, state, large].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};

import '../../public/stylesheets/application.css';

export const createCheckbox = ({
  small = false,
  backgroundColor,
  onClick,
  value,
  name,
  id,
}) => {
  const checkbox = document.createElement('input');
  checkbox.id = id;
  checkbox.name = name;
  checkbox.value = value;
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', onClick);

  const smaller = !small ? '' : 'govuk-checkboxes--small';
  checkbox.className = ['govuk-checkboxes__input', smaller].join(' ');

  checkbox.style.backgroundColor = backgroundColor;

  return checkbox;
};

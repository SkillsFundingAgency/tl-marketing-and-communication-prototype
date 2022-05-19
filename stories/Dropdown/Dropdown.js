import '../../public/stylesheets/application.css';

export const Dropdown = ({
}) => {
  const dropdown = document.createElement('input');
  dropdown.type = 'select';
  dropdown.className = ['govuk-select'].join(' ');

  return dropdown;
};

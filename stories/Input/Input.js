import '../../public/stylesheets/application.css';

export const createInput = ({
  error,
}) => {
  const Input = document.createElement('input');
  Input.type = 'text';

  const isError = !error ? '' : 'govuk-input--error';
  Input.className = ['govuk-input', isError,].join(' ');

  return Input;
};

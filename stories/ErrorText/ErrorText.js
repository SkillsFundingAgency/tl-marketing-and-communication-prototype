import '../../public/stylesheets/application.css';

export const ErrorText = ({
  text,
}) => {
  const error = document.createElement('div');
  error.innerText = text;
  error.className = ['govuk-error-message'].join(' ');

  return error;
};


import '../../public/stylesheets/application.css';

export const createErrorSum = ({
  heading
}) => {
  const ErrorSummary = document.createElement('div');
  ErrorSummary.innerText = heading;
  ErrorSummary.className = ['govuk-error-summary'].join(' ');
  return ErrorSummary;
};

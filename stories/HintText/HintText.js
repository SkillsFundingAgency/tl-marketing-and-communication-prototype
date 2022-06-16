import '../../public/stylesheets/application.css';

export const createHint = ({ hint, label }) => {

  const container = document.createElement('div');

  const labelContainer = document.createElement('label');
  labelContainer.className = 'govuk-label';
  labelContainer.innerHTML = label;
  const hintContainer = document.createElement('div');
  hintContainer.className = 'govuk-hint';
  hintContainer.innerHTML = hint;

  labelContainer.appendChild(container)
  hintContainer.appendChild(container)

  return container;
};

import '../../public/stylesheets/application.css';

export const Heading = ({
  heading,
  size,
  level,
}) => {
  let headerLevel = '';
  switch (level) {
    case 'h1':
      headerLevel = 'h1';
      break;
    case 'h2':
      headerLevel = 'h2';
      break;
    case 'h3':
      headerLevel = 'h3';
      break;
    case 'h4':
      headerLevel = 'h4';
      break;
    case 'h5':
      headerLevel = 'h5';
      break;
    case 'h6':
      headerLevel = 'h6';
      break;
    default:
      headerLevel = 'h1';
  }
  const CreateHeading = document.createElement(headerLevel);
  let textSize = '';
  switch (size) {
    case 'XL':
      textSize = 'govuk-heading-xl';
      break;
    case 'L':
      textSize = 'govuk-heading-l';
      break;
    case 'M':
      textSize = 'govuk-heading-m';
      break;
    case 'S':
      textSize = 'govuk-heading-s';
      break;
    default:
      textSize = 'govuk-heading-l';
  }
  CreateHeading.innerText = heading;
  CreateHeading.className = ['govuk-heading', textSize].join(' ');
  return CreateHeading;
};

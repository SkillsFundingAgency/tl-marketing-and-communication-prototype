import '../../public/stylesheets/application.css';

export const Caption = ({
  text,
  size
}) => {
  const caption = document.createElement('div');
  let textSize = '';
  switch (size) {
    case 'XL':
      textSize = 'govuk-caption-xl';
      break;
    case 'L':
      textSize = 'govuk-caption-l';
      break;
    case 'M':
      textSize = 'govuk-caption-m';
      break;
    case 'S':
      textSize = 'govuk-caption-s';
      break;
    default:
      textSize = 'govuk-caption-l';
  }
  caption.innerText = text;
  caption.className = [textSize].join(' ');

  return caption;
};

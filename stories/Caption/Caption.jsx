import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

let textSize = '';

export const Caption = ({ size, text, ...props }) => {
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
  return (
    <div
      className={[textSize].join(' ')}
      {...props}
    >
      {text}
    </div>
  );
};

Caption.propTypes = {
  text: PropTypes.string.isRequired,
};

Caption.defaultProps = {
};

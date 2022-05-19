import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';
import { CreateHeading } from './Heading'

let textSize = '';
let headerLevel = '';

export const Heading = ({ level ,size, heading, ...props }) => {
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
  return (
    <headerLevel
      className={['govuk-header', textSize].join(' ')}
      {...props}
    >
      {heading}
    </headerLevel>
  )
}

CreateHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

let tagState = '';

export const Tag = ({ state, text, ...props }) => {
  switch (state) {
    case 'Beta':
      tagState = '';
      break;
    case 'Urgent':
      tagState = 'govuk-tag--red';
      break;
    case 'Active':
      tagState = 'govuk-tag--turquoise';
      break;
    case 'Inactive':
      tagState = 'govuk-tag--grey';
      break;
    case 'New':
      tagState = 'govuk-tag--green';
      break;
    case 'Pending':
      tagState = 'govuk-tag--blue';
      break;
    case 'Received':
      tagState = 'govuk-tag--purple';
      break;
    case 'Sent':
      tagState = 'govuk-tag--pink';
      break;
    case 'Rejected':
      tagState = 'govuk-tag--red';
      break;
    case 'Declined':
      tagState = 'govuk-tag--orange';
      break;
    case 'Delayed':
      tagState = 'govuk-tag--yellow';
      break;
    case 'Finished':
      tagState = 'govuk-tag--green';
      break;
    case 'Waiting On':
      tagState = 'govuk-tag--yellow';
      break;
    default:
      tagState = '';
  }
  return (
    <div
      className={['govuk-tag', tagState].join(' ')}
      {...props}
    >
      {text}
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

Tag.defaultProps = {
};

import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

export const ErrorSummary = ({ heading, ...props }) => {
  return (
    <div
      className={['govuk-error-summary'].join(' ')}
      {...props}
    >
      <h2
        className={['govuk-header']}
      >
        {heading}
      </h2>
    </div>
  )
}

ErrorSummary.propTypes = {
  heading: PropTypes.string.isRequired,
};

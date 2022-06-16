import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

export const ButtonGov = ({ label, ...props }) => {
  return (
    <label
      className={['govuk-label'].join(' ')}
      {...props}
    >
      {label}
    </label>
  );
};

ButtonGov.propTypes = {
  label: PropTypes.string.isRequired,
};

ButtonGov.defaultProps = {
};
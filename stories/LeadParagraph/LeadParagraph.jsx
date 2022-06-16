import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

export const ButtonGov = ({ text, ...props }) => {
  return (
    <h1
      className={['govuk-body-lead'].join(' ')}
      {...props}
    >
      {text}
    </h1>
  );
};

ButtonGov.propTypes = {
  text: PropTypes.string.isRequired,
};

ButtonGov.defaultProps = {
};
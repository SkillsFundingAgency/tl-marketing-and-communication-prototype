import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

export const ButtonGov = ({ enabled, primary, start, backgroundColor, label, ...props }) => {
  const mode = primary ? '' : 'govuk-button--secondary';
  const state = enabled ? '' : 'govuk-button--disabled';
  const large = !start ? '' : 'govuk-button--start';
  return (
    <button
      type="button"
      className={['govuk-button', mode, state, large].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

ButtonGov.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonGov.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined,
  start: false,
};
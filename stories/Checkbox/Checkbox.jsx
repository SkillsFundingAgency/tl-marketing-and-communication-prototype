import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

export const CheckboxGov = ({ id, name, value, small, backgroundColor, ...props }) => {
  const smaller = !small ? '' : 'govuk-checkboxes--small';
  return (
    <input
      id={id}
      name={name}
      value={value}
      type='checkbox'
      className={['govuk-checkboxes__input', smaller].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    />
  )
}

CheckboxGov.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};

CheckboxGov.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
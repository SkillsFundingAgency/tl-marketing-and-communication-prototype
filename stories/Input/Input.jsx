import React from 'react';
import '../../public/stylesheets/application.css';

export const Input = ({ error, ...props }) => {
  const isError = !error ? '' : 'govuk-input--error';
  return (
    <input
      type='text'
      className={['govuk-input', isError].join(' ')}
      {...props}
    />
  )
}

Input.defaultProps = {
  error: false,
}

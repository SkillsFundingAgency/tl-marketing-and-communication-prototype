import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

export const HintText = ({ text, ...props }) => {
  return (
    <div
      className={['govuk-inset-text'].join(' ')}
      {...props}
    >
      {text}
    </div>
  );
};

HintText.propTypes = {
  text: PropTypes.string.isRequired,
};

HintText.defaultProps = {
};

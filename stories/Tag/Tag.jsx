import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

export const Tag = ({ active, text, ...props }) => {
  const isActive = active ? '' : 'govuk-tag--grey';
  return (
    <div
      className={['govuk-tag', isActive].join(' ')}
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

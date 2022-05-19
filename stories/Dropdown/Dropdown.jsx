import React from 'react';
import PropTypes from 'prop-types';
import '../../public/stylesheets/application.css';

export const Dropdown = ({ ...props }) => {
  return (
    <input
      type="select"
      className={['govuk-select'].join(' ')}
      {...props}
    >
      <option value="1">
        Option 1
      </option>

    </input>
  );
};

Dropdown.propTypes = {

};

Dropdown.defaultProps = {

};
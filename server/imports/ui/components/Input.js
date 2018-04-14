import React from 'react';
import PropTypes from 'prop-types'; // ES6



//stateless functional components
const Input = (props) => {
  return (
    <div className="form__block">
      <input type={ props.type } name={ props.name } placeholder={ props.placeholder } defaultValue = { props.defaultValue } autoComplete="true" className="form__input" />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string
}

export default Input;

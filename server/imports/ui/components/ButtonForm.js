import React from 'react';
import PropTypes from 'prop-types'; // ES6



//stateless functional components
const ButtonForm = (props) => {
  return (
    <div className="form__block">
      <button type={ props.type } className={"button " +  props.modifier }>{ props.text }</button>
    </div>
  );
}

ButtonForm.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  modifier: PropTypes.string
}

export default ButtonForm;

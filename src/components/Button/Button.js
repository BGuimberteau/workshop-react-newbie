import React, { PropTypes } from 'react';
import './Button.css';

const Button = ({text, onClick}) => (
  <button className="button" onClick={onClick} data-text={text}>
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;

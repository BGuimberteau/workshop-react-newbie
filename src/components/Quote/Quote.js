import React, { PropTypes } from 'react';
import './Quote.css';

const Quote = ({author, children}) => (
  <blocquote className="quote">
    <p className="quote-text">{children}</p>
    <small className="quote-author">{author}</small>
  </blocquote>
);

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Quote;

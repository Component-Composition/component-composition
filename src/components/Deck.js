import React from 'react';
import PropTypes from 'prop-types';

const Deck = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Deck.propTypes = {
  children: PropTypes.node.isRequired
};

export default Deck;

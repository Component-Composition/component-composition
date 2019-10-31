import React from 'react';
import PropTypes from 'prop-types';

const Deck = ({ children, title }) => {
  return (
    <section>
      {title && <header>{title}</header>}
      {children}
    </section>
  );
};

Deck.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Deck;

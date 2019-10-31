import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ items }) => {

  const cards = items.map((character, i) => {
    return (
      <li key={character._id || i}>
        <Card {...character} />
      </li>
    );
  });

  return (
    <ul>
      {cards}
    </ul>
  );

};

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    image: PropTypes.string,
    gifLink: PropTypes.string
  })).isRequired
};

export default Cards;

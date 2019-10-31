import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ characters }) => {

  const cards = characters.map((character, i) => {
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
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Cards;

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ characters }) => {

  const cards = characters.map((character, i) => {
    <div key={character._id || i}>
      <header><h3>{character.name}</h3></header>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
      <p>{character.name} has {character._id}</p>
    </div>
  });

  return (
    <ul>
      {cards}
    </ul>
  );
};

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

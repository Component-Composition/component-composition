import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ _id, name, image, gifLink }) => {

  return (
    <div key={_id}>
      {name && <header><h3>{name}</h3></header>}
      <figure>
        <img src={image || gifLink} alt={name} />
      </figure>
      <p>{name} has {_id}</p>
    </div>
  );
};

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
  image: PropTypes.string,
  gifLink: PropTypes.string
};

export default Card;

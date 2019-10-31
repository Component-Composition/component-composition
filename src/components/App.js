import React from 'react';
import Deck from '../components/Deck';
import Characters from '../containers/Characters';
import Gifs from '../containers/Gifs';

export default function App() {
  return (
    <>
      <Deck>
        <Characters />
      </Deck>
      <Deck>
        <Gifs />
      </Deck>
    </>
  );
}

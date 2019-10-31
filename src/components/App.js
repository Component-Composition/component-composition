import React from 'react';
import { gifs } from '../content.json';
import Deck from '../components/Deck';
import Cards from './DeckOfCards';
import Characters from '../containers/Characters';

export default function App() {
  return (
    <>
      <Deck>
        <Characters />
      </Deck>
      <Deck>
        <Cards characters={gifs} />
      </Deck>
    </>
  );
}

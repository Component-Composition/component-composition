import React from 'react';
import { characters, gifs } from '../content.json';
import Deck from '../components/Deck';
import Cards from './DeckOfCards';

export default function App() {
  return (
    <>
      <Deck>
        <Cards characters={characters} />
      </Deck>
      <Deck>
        <Cards characters={gifs} />
      </Deck>
    </>
  );
}

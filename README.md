# Lab: Component Composition

### Author: Abbey Masters, Jose Ojeda, Antonella Gutierrez

### Links and Resources
* [submission PR](https://github.com/Component-Composition/component-composition/pull/1)
* [travis]()

###  Components
* `Characters.js`
  * This component will render `Cards.js`
* `Gifs.js`
  * This component will render `Cards.js`
* `Card.js`
  * This component holds card layout
* `DeckOfCards.js`
  * This component uses `Card.js` to render cards
* `Deck.js`
  * This component contains cards
* `App.js`
  * This component renders all other components

### Setup
#### .env requirements
* PORT - 7890
#### Running the app
* npm run build
* npm run start
#### Tests
* Unit Tests: npm run test
* Lint Tests: npm run lint

## Scripts
"test": "jest --verbose",
"test:watch": "npm run test -- --watch",
"start": "webpack-dev-server --hot --mode development --devtool eval-source-map",
"build": "webpack -p --devtool source-map"
import React, { Component } from 'react';
import Cards from '../components/DeckOfCards';

export default class Gifs extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://hey-arnold-api.herokuapp.com/api/v1/gifs')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <Cards characters={data} />
    );

  }

}

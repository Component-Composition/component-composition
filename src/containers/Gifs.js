import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cards from '../components/DeckOfCards';

export default class Gifs extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: [],
      count: props.count
    };
  }

  static propTypes = {
    count: PropTypes.number
  }
  // state = {
  //   data: []
  // }

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

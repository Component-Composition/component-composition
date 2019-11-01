import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cards from '../components/DeckOfCards';
import { getItems } from '../services/hey-arnold-api';

export default class Gifs extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: []
    };
  }

  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  componentDidMount() {
    const URL = `https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?count=${this.props.count}`;

    getItems(URL)
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <Cards items={data} />
    );

  }

}

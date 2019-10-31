import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cards from '../components/DeckOfCards';

export default class Characters extends Component {
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
    const URL = `https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=${this.props.count}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <Cards items={data} />
    );
  }
}

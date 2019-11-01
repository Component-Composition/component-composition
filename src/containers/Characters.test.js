import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

jest.mock('../services/hey-arnold-api.js', () => {
  return {
    getCharacters() {
      return Promise.resolve();
    }
  };
});

describe('Characters Component', () => {
  it('renders Characters', () => {
    
  });
});

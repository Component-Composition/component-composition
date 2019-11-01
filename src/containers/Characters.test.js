import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';
import { getItems } from '../services/hey-arnold-api';

jest.mock('../services/hey-arnold-api.js', () => {
  return {
    getItems() {
      return Promise.resolve([{
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      }]);
    }
  };
});

describe('Characters Component', () => {
  it('renders Characters', () => {
    return getItems().then(item => {
      const wrapper = shallow(<Characters items={item} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

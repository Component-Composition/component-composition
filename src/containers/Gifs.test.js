import React from 'react';
import { shallow } from 'enzyme';
import Gifs from './Gifs';
import { getItems } from '../services/hey-arnold-api';

jest.mock('../services/hey-arnold-api.js', () => {
  return {
    getItems() {
      return Promise.resolve([{
        '_id': '5da237699734fdcb7bef8f51',
        'gifLink': '"https://media.tenor.com/images/e7623921965651fa6fba7e0c37892044/tenor.gif"'
      }]);
    }
  };
});

describe('Gifs Component', () => {
  it('renders Characters', () => {
    return getItems().then(item => {
      const wrapper = shallow(<Gifs items={item} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

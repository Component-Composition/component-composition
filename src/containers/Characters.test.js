import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters Component', () => {
  it('renders Characters', () => {
    const wrapper = shallow(<Characters />);
    wrapper.setState({ count: 1 });
    expect(wrapper).toMatchSnapshot();
  });
});

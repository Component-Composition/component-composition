import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards';

describe('Card Component', () => {
  const charArr = [{
    _id: '5da237699734fdcb7bef8f51',
    name: 'Arnold Shortman',
    image: 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
  },
  {
    _id: '5da237699734fdcb7bef8f53',
    name: 'Grandma Gertie',
    image: 'https://vignette.wikia.nocookie.net/heyarnold/images/7/7b/DB87AC2A-C2C2-4DAB-AECF-B9F7273C746B.png/revision/latest/scale-to-width-down/306?cb=20190816101257'
  }];
  it('renders Cards', () => {
    const wrapper = shallow(<Cards characters={charArr} />);
    expect(wrapper).toMatchSnapshot();
  });
});

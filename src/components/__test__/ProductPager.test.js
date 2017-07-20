jest.dontMock('../../components/ItemsPerPage.js');

import React from 'react';
import {shallow} from 'enzyme';
import ProductPager from '../ProductPager';

describe("the product pager component", function() {
  it("the component rendered correctly", function() {

    const component = shallow(
      <ProductPager
        currentPage={1}
        totalPage={10}/>
    )

    expect(component.find('.grayout')).toHaveLength(1);
    expect(component.find('.grayout').text()).toEqual(' Previous Page');
  })


})

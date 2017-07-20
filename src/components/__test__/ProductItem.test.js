jest.dontMock('../../components/ItemsPerPage.js');

import React from 'react';
import {shallow} from 'enzyme';
import ProductItem from '../ProductItem';

describe("the product item component", function() {
  it("the component rendered correctly", function() {

    const product = {
        product_image: './1.jpg',
        product_name: 'product a',
        description: 'description',
        price: '$10'
    }

    const component = shallow(
      <ProductItem {...product} />
    )

    expect(component.find('h3').text()).toEqual('product a');
  })
})

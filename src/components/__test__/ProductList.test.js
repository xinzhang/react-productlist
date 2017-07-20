jest.dontMock('../../components/ItemsPerPage.js');

import React from 'react';
import {shallow} from 'enzyme';
import ProductList from '../ProductList';

describe("the product list component", function() {
  it("the component rendered correctly", function() {

    const products = [{
        product_image: './1.jpg',
        product_name: 'product a',
        description: 'description',
        price: '$10'
    }, {
        product_image: './2.jpg',
        product_name: 'product b',
        description: 'description',
        price: '$12'
    }]

    const component = shallow(
      <ProductList products={products} />
    )

    expect(component.find('ProductItem')).toHaveLength(2);
  })


})

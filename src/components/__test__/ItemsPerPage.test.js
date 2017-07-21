jest.dontMock('../../components/ItemsPerPage.js');

import React from 'react';
import {shallow} from 'enzyme';
import ItemsPerPage from '../ItemsPerPage';

describe("the items per page component", function() {
  it("the component rendered correctly", function() {

    var itemsPerPage = shallow(
      <ItemsPerPage  />
    )
    const a = itemsPerPage.name();
    expect(a).toEqual('select');
  })

  it("the component triggered dropdownlist change", function() {
    const value = '20'
    const testUpdateItems = jest.fn();

    var itemsPerPage = shallow(
      <ItemsPerPage updateItemsPerPage={testUpdateItems}  />
    )

    itemsPerPage.find('select').simulate('change', { target: value});

    expect(testUpdateItems).toBeCalledWith({target:value});

  })

})

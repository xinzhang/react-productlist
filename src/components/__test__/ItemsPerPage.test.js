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

  describe("the component triggered dropdownlist change", function() {

    var itemsPerPage = shallow(
      <ItemsPerPage  />
    )
    const a = itemsPerPage.name();
    expect(a).toEqual('select');
  })
})

jest.dontMock('../../components/ItemsPerPage.js');

import React from 'react';
import {shallow} from 'enzyme';
import TotalProducts from '../TotalProducts';

describe("the total products component", function() {
  it("the component rendered correctly", function() {

    const component = shallow(
      <TotalProducts total={100} />
    )

    expect(component.text()).toEqual('100 Products');
  })

})

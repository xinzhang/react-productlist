import reducer from '../productReducer'
import * as types from '../../actions/actionTypes'

describe('product list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should load products', () => {
    expect(
      reducer([], {
        type: types.PRODUCTS_LOAD_SUCCESS,
        products: [
                 {"id":1,"price":"$87.68","product_name":"Amitriptyline Hydrochloride"},
                 {"id":2,"price":"$88.68","product_name":"Amitriptyline Hydrochloride"}
        ]
      })
    ).toEqual([
      {"id":1,"price":"$87.68","product_name":"Amitriptyline Hydrochloride"},
      {"id":2,"price":"$88.68","product_name":"Amitriptyline Hydrochloride"}
    ])
    
  })
})

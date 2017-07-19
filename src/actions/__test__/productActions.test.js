import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../productActions'
import * as types from '../actionTypes'
import nock from 'nock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('load products', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates PRODUCTS_LOAD_SUCCESS when fetching products has been done', () => {
    nock('https://whitechdevs.github.io/reactjs-test')
      .get('/products.json')
      .reply(200, { body: {
          products: [
            {"id":1,"price":"$87.68","product_name":"Amitriptyline Hydrochloride"},
            {"id":2,"price":"$88.68","product_name":"Amitriptyline Hydrochloride"}
          ]
        }
      })

    const expectedActions = [
      { type: types.PRODUCTS_LOAD_REQUEST },
      {
        type: types.PRODUCTS_LOAD_SUCCESS, body: {
          products: [
            {"id":1,"price":"$87.68","product_name":"Amitriptyline Hydrochloride"},
            {"id":2,"price":"$88.68","product_name":"Amitriptyline Hydrochloride"}
          ]
        }
      }
    ]

    const store = mockStore({ products: [] })

    return store.dispatch(actions.loadProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

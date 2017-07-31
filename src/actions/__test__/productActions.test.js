import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../productActions'
import * as types from '../actionTypes'
import nock from 'nock'
import expect from 'expect' // You can use any testing library
import fetch from 'isomorphic-fetch';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('load products', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates PRODUCTS_LOAD_SUCCESS when fetching products has been done', () => {
    // nock('https://whitechdevs.github.io')
    //   .get('/reactjs-test/products.json')
    //   .reply(200, { body: {
    //       products: [
    //         {"id":1,"price":"$87.68","product_name":"Amitriptyline Hydrochloride"},
    //         {"id":2,"price":"$88.68","product_name":"Amitriptyline Hydrochloride"}
    //       ]
    //     }
    //   })
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

    //window.fetch = jest.func().mockImplementation( () => Promise.resolve({ok:true, expectedActions[1].body}));

    const store = mockStore({ products: [] })

    return store.dispatch(actions.loadProducts()).then(() => {
      // return of async actions
      let actions = store.getActions();

      expect(actions[0]).toEqual(expectedActions[0]);
      expect(actions[1].type).toEqual(expectedActions[1].type);
      expect(actions[1].products.length).toEqual(1000);
    })
  })
})

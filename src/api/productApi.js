import fetch from 'isomorphic-fetch';

const producturl = 'https://whitechdevs.github.io/reactjs-test/products.json'

class ProductApi {
  static getAllProducts(pageno) {
    return fetch(producturl).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ProductApi

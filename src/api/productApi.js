import fetch from 'isomorphic-fetch';

const producturl = 'https://whitechdevs.github.io/reactjs-test/products.json'

// class ProductApi {
//   static getAllProducts(pageno) {
//     return fetch(producturl).then(response => {
//       return response.json();
//     }).catch(error => {
//       return error;
//     });
//   }
// }

export async function getAllProducts(pageno) {
  const resp = await fetch(producturl);
  const products = await resp.json()

  return products;
}

//export default getAllProducts;

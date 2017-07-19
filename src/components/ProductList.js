import React, {Component} from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        {this.props.products.map(item =>
          <div key={item._id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ProductItem {...item} key={item._id} />
          </div>
        )}
      </div>
    )
  }
}

export default ProductList

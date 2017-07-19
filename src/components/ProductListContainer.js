import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/productActions';

import ProductList from './ProductList';
import ProductPager from './ProductPager';
import TotalProducts from './TotalProducts';
import ItemsPerPage from './ItemsPerPage';

class ProductListContainer extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        currentPage : 1,
        totalPage : 1,
        itemsPerPage: 8,
        products:[]
      }

      this.pagination = this.pagination.bind(this);
      this.updateItemsPerPage = this.updateItemsPerPage.bind(this);
    }

    componentWillReceiveProps(nextProps){
      let itemsPerPage = this.state.itemsPerPage;
      let pageno = this.state.currentPage;

      let totalPage = parseInt(nextProps.products.length / this.state.itemsPerPage) + 1;
      let pagedArray = nextProps.products.slice((pageno-1) * itemsPerPage, pageno * itemsPerPage);

      this.setState({
        totalPage:totalPage,
        products: pagedArray
      })
    }

    pagination(pageno) {
      //console.log(items, pageno);

      let itemsPerPage = this.state.itemsPerPage;
      let pagedArray = this.props.products.slice((pageno-1) * itemsPerPage, pageno * itemsPerPage);

      this.setState({
        currentPage:pageno,
        products: pagedArray
      })
    }

    updateItemsPerPage(itemsPerPage) {
      let pagedArray = this.props.products.slice(0, itemsPerPage);
      this.setState({
        itemsPerPage,
        products: pagedArray
      })
    }

    render() {
      return (
        <div className="container">
        <div className="row">
          <div>
            <TotalProducts total={this.props.products.length} />
            <ItemsPerPage test={3} itemsPerPageList={this.props.itemsPerPageList} updateItemsPerPage={this.updateItemsPerPage} />
          </div>
        </div>
        <div className="row">
          <div className="grid-list-wrapper">
            <ProductList products={this.state.products} />
          </div>
          <ProductPager
            currentPage={this.state.currentPage}
            totalPage={this.state.totalPage}
            pageNavigation={this.pagination}/>
        </div>
      </div>
      );
    }
}

ProductListContainer.propTypes = {
  products: PropTypes.array.isRequired,
  itemsPerPageList: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    products: state.products,
    itemsPerPageList: state.itemsPerPageList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);

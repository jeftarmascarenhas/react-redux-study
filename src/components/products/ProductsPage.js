import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';
import { browserHistory } from 'react-router';

const propTypes = {
  products: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

class ProductsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddProductPage = this.redirectToAddProductPage.bind(this);
  }

  redirectToAddProductPage() {
    browserHistory.push('/product');
  }

  render() {
    const products = this.props;
    return(
      <div>
        <h1>Products</h1>
         <input
          type="submit"
          value={'Add product'}
          className="btn btn-primary"
          onClick={this.redirectToAddProductPage}
        />
        <ProductList products={this.props.products}/>
      </div>
    );
  }
}

ProductsPage.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

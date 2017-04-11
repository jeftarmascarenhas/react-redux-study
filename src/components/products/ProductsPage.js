import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';

const propTypes = {
  products: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

class ProductsPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const products = this.props;
    return(
      <div>
        <h1>Products</h1>
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

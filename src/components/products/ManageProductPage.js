import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../../actions/productActions';
import ProductForm from './ProductForm';

const propTypes = {
  product: React.PropTypes.object.isRequired
};



class ManageProductPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      product: Object.assign({}, this.props.product),
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <h1>Manage Product</h1>
        <ProductForm product={this.state.product} errors={this.state.errors}/>
      </div>
    );
  }
}

ManageProductPage.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  let product = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};
  return { product };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);

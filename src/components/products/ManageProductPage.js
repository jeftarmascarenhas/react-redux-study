import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../../actions/productActions';
import ProductForm from './ProductForm';
import toastr from 'toastr';

const propTypes = {
  product: React.PropTypes.object,
  authors: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};



class ManageProductPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      product: Object.assign({}, props.product),
      errors: {},
      saving:false
    };

    this.updateProductState = this.updateProductState.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.product.id != nextProps.product.id){
      this.setState({product: Object.assign({}, nextProps.product)});
    }
  }

  updateProductState(event) {
    const field = event.target.name;
    let product = this.state.product;
    product[field] = event.target.value;
    return this.setState({product: product});
  }

  saveProduct(event) {
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveProduct(this.state.product)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving:false});
    });
  }

  redirect() {
    this.setState({saving:false});
    toastr.success('Product saved');
    this.context.router.push('/products');
  }

  render() {
    return (
        <ProductForm
          allAuthors={this.props.authors}
          product={this.state.product}
          onChange={this.updateProductState}
          onSave={this.saveProduct}
          errors={this.state.errors}
          saving={this.state.saving}
        />
    );
  }
}

ManageProductPage.propTypes = propTypes;

ManageProductPage.contextTypes = {
  router: PropTypes.object
};

const getProductById = (products, id) => {
  const product = products.filter( product => product.id == id );
  if(product) return product[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.params.id;
  let product = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};

  if(productId && state.products.length > 0) {
    product = getProductById(state.products, productId);
  }

  const authorsFormatterForDropdown = state.authors.map(author =>{
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    product: product,
    authors: authorsFormatterForDropdown
  };

};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../actions/productActions';

class ProductsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      product: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const product = this.state.product;
    product.title = event.target.value;
    this.setState({product: product});
  }

  onClickSave(event) {
    event.preventDefault();
    this.props.dispatch(productActions.createProduct(this.state.product));
  }

  productRow(product, index) {
    return <div key={index}>{product.title}</div>;
  }

  render() {
    return(
      <div>
        <h1>Products</h1>
        {this.props.products.map(this.productRow)}
        <h2>Add Products</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          valeu={this.state.product.title} />
        <input type="submit" value="Save" onClick={this.onClickSave}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

ProductsPage.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  products: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps)(ProductsPage);

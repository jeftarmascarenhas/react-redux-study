import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../../actions/productActions';

const propTypes = {};

const defaultProps = {};

class ManageProductPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Manage Product</h1>
      </div>
    );
  }
}

ManageProductPage.propTypes = propTypes;

ManageProductPage.defaultProps = defaultProps;

const mapStateToProps = (state, ownProps) => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);

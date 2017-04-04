import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ProductListRow = ({product}) => {
  return (
    <tr>
      <td><a href={product.watchHref}>Watch</a></td>
      <td><Link to={'/product/' + product.id}>{product.title}</Link></td>
      <td>{product.authorId}</td>
      <td>{product.category}</td>
      <td>{product.length}</td>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: React.PropTypes.object.isRequired
};

export default ProductListRow;
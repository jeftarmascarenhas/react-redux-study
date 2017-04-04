import React, { PropTypes } from 'react';
import ProductListRow from './ProductListRow';

const ProductList = ({products}) => {
  return(
    <table className="tabel">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product => {
            return(
                <ProductListRow key={product.id} product={product}/>
              );
          })
        }
      </tbody>
    </table>
  );
};

ProductList.propTypes = {
  products: React.PropTypes.array.isRequired
};


export default ProductList;
import React, { PropTypes } from 'react';
import TextInput from '../commom/TextInput';
import SelectInput from '../commom/SelectInput';

const propTypes = {
  product: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

const ProductForm = ({ product, allAuthors, onSave, onChange, loading, errors }) => {
  return(
    <form>
      <h1>Manage Product</h1>
      <TextInput
        name="title"
        label="Title"
        value={product.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Author"
        value= {product.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextInput
        name="category"
        label="Category"
        value={product.category}
        onChange={onChange}
        error={errors.category}
      />

      <TextInput
        name="length"
        label="Length"
        value={product.length}
        onChange={onChange}
        error={errors.length}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />

    </form>
  );

};

ProductForm.prototype = propTypes;

export default ProductForm;
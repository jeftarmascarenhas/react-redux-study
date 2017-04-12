import React, { PropTypes } from 'react';

const propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  defaultOption: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired,
  error: React.PropTypes.string
};


const SelectInput = ({name, label, value, defaultOption, options, onChange, error}) => {
  return(
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        >
        <option value={defaultOption}></option>
        {
          options.map( (option) =>{
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
        }
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}

SelectInput.propTypes = propTypes;

export default SelectInput;

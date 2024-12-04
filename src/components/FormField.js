import React from 'react';

const FormField = ({ field, formData, handleInputChange, formErrors }) => {
  switch (field.type) {
    case 'text':
    case 'number':
    case 'password':
    case 'date':
      return (
        <div>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
          />
          {formErrors[field.name] && <span>{formErrors[field.name]}</span>}
        </div>
      );
    case 'dropdown':
      return (
        <div>
          <label>{field.label}</label>
          <select
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
          >
            {field.options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
          {formErrors[field.name] && <span>{formErrors[field.name]}</span>}
        </div>
      );
    default:
      return null;
  }
};

export default FormField;

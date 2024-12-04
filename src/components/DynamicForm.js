import React, { useState, useEffect } from 'react';
import FormField from './FormField';
import ProgressBar from './ProgressBar';
import FormTable from './FormTable';
import '../styles/Form.css';

const DynamicForm = ({ selectedForm }) => {
    const [formData, setFormData] = useState({});
    const [fields, setFields] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [progress, setProgress] = useState(0);
    const [submittedData, setSubmittedData] = useState(null);
  
    const apiResponses = {
      userInfo: {
        fields: [
          { name: 'firstName', type: 'text', label: 'First Name', required: true },
          { name: 'lastName', type: 'text', label: 'Last Name', required: true },
          { name: 'age', type: 'number', label: 'Age', required: false }
        ]
      },
      addressInfo: {
        fields: [
          { name: 'street', type: 'text', label: 'Street', required: true },
          { name: 'city', type: 'text', label: 'City', required: true },
          { name: 'state', type: 'dropdown', label: 'State', options: ['California', 'Texas', 'New York'], required: true },
          { name: 'zipCode', type: 'text', label: 'Zip Code', required: false }
        ]
      },
      paymentInfo: {
        fields: [
          { name: 'cardNumber', type: 'text', label: 'Card Number', required: true },
          { name: 'expiryDate', type: 'date', label: 'Expiry Date', required: true },
          { name: 'cvv', type: 'password', label: 'CVV', required: true },
          { name: 'cardholderName', type: 'text', label: 'Cardholder Name', required: true }
        ]
      }
    };
  
    useEffect(() => {
      if (selectedForm) {
        setFields(apiResponses[selectedForm].fields);
      }
    }, [selectedForm]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  
      const completedFields = Object.keys(formData).filter(key => formData[key] !== '');
      setProgress((completedFields.length / fields.length) * 100);
    };
  
    const validateForm = () => {
      const errors = {};
      fields.forEach(field => {
        if (field.required && !formData[field.name]) {
          errors[field.name] = `${field.label} is required`;
        }
      });
      setFormErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        setSubmittedData(formData); // Save form data after submission
        alert('Form submitted successfully');
      }
    };
  
    const handleDelete = () => {
      setFormData({}); // Reset formData to empty object
      setSubmittedData(null); // Clear the submitted data
      alert('Entry deleted successfully.');
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <FormField
              key={index}
              field={field}
              formData={formData}
              handleInputChange={handleInputChange}
              formErrors={formErrors}
            />
          ))}
          <button type="submit">Submit</button>
        </form>
        <ProgressBar progress={progress} />
        {submittedData && (
          <FormTable
            formData={submittedData}
            setFormData={setFormData}
            handleDelete={handleDelete} // Pass handleDelete to FormTable
          />
        )}
      </div>
    );
  };
  
  export default DynamicForm;
  
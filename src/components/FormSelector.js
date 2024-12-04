import React from 'react';
const FormSelector = ({ setSelectedForm }) => {
  return (
    <div>
        
      <h2>Select Form Type</h2>
      <select onChange={(e) => setSelectedForm(e.target.value)}>
        <option value="">Select Form Type</option>
        <option value="userInfo">User Information</option>
        <option value="addressInfo">Address Information</option>
        <option value="paymentInfo">Payment Information</option>
      </select>
    </div>
  );
};

export default FormSelector;

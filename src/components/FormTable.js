import React, { useState, useEffect } from 'react';
import '../styles/FormTable.css';

const FormTable = ({ formData, setFormData, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(formData);

  useEffect(() => {
    setEditedData(formData); // Sync local state with parent data
  }, [formData]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setFormData(editedData); // Update the parent state
    setEditedData(editedData); // Sync local state with updated data
    setIsEditing(false);
    alert('Changes saved successfully.');
  };

  return (
    <div>
      <h2>Submitted Data:</h2>
      <table>
        <thead>
          <tr>
            {Object.keys(formData).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(formData).map((key, index) => (
              <td key={index}>
                {isEditing ? (
                  <input
                    type="text"
                    name={key}
                    value={editedData[key] || ''} // Use editedData for input value
                    onChange={(e) => setEditedData({ ...editedData, [key]: e.target.value })}
                  />
                ) : (
                  formData[key] // Use formData for display when not editing
                )}
              </td>
            ))}
            <td>
              {isEditing ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <button onClick={handleEdit}>Edit</button>
              )}
              <button onClick={handleDelete}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormTable;

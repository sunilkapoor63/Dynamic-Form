import React, { useState } from 'react';
import FormSelector from './components/FormSelector';
import DynamicForm from './components/DynamicForm';
import './styles/App.css';


const App = () => {
  const [selectedForm, setSelectedForm] = useState('');

  return (
    <div>
      <h1>Dynamic Form Application</h1>
      <FormSelector setSelectedForm={setSelectedForm} />
      {selectedForm && <DynamicForm selectedForm ={selectedForm} />}
    </div>
  );
};

export default App;

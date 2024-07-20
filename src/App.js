import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import FormBuilder from './components/FormBuilder/FormBuilder';
import CodeGenerator from './components/CodeGenerator/CodeGenerator';
import './styles.css';

const App = () => {
  const [components, setComponents] = useState([]);

  const handleDragStart = (e, componentType) => {
    e.dataTransfer.setData('componentType', componentType);
  };

  const handleDrop = (e) => {
    const type = e.dataTransfer.getData('componentType');
    const newComponent = {
      id: components.length + 1,
      type,
    };

    // Añadir opción por defecto si el componente es select
    if (type === 'select') {
      newComponent.options = ['Default Option'];
    }

    setComponents([...components, newComponent]);
  };

  const removeComponent = (id) => {
    setComponents(components.filter(component => component.id !== id));
  };

  const updateComponent = (updatedComponent) => {
    setComponents(components.map(component => 
      component.id === updatedComponent.id ? updatedComponent : component
    ));
  };

  return (
    <div className="app">
      <Sidebar onDragStart={handleDragStart} />
      <FormBuilder 
        onDrop={handleDrop} 
        onDragOver={(e) => e.preventDefault()} 
        components={components} 
        removeComponent={removeComponent} 
        updateComponent={updateComponent}
      />
      <CodeGenerator components={components} />
    </div>
  );
};

export default App;
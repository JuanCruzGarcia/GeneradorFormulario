import React, { useState } from 'react';
import ComponentConfigModal from '../ComponentConfigModal/ComponentConfigModal';

const FormBuilder = ({ components, onDrop, onDragOver, removeComponent, updateComponent }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  const handleModalClose = () => {
    setSelectedComponent(null);
  };

  return (
    <div 
      className="form-builder" 
      onDrop={onDrop} 
      onDragOver={onDragOver}
    >
      {components.map(component => (
        <div 
          key={component.id} 
          className="component-wrapper" 
          onClick={() => handleComponentClick(component)}
        >
          {component.type === 'label' && <label>{component.text || 'Label'}</label>}
          {component.type === 'input' && <input type={component.inputType || 'text'} placeholder="Input" />}
          {component.type === 'select' && (
            <select>
              {component.options && component.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          )}
          {component.type === 'checkbox' && <input type="checkbox" />}
          {component.type === 'textarea' && <textarea placeholder="Textarea"></textarea>}
          {component.type === 'button' && (
            <button className="form-button">
              {component.text || 'Button'}
            </button>
          )}
          <button 
            className="remove-button" 
            onClick={(e) => {
              e.stopPropagation();
              removeComponent(component.id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
      {selectedComponent && (
        <ComponentConfigModal 
          component={selectedComponent} 
          onClose={handleModalClose} 
          onSave={updateComponent} 
        />
      )}
    </div>
  );
};

export default FormBuilder;
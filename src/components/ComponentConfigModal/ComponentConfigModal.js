import React, { useState } from 'react';

const ComponentConfigModal = ({ component, onClose, onSave }) => {
  const [text, setText] = useState(component.text || '');
  const [inputType, setInputType] = useState(component.inputType || 'text');
  const [options, setOptions] = useState(component.options || []);
  const [action, setAction] = useState(component.action || 'default');

  const handleSave = () => {
    onSave({ ...component, text, inputType, options, action });
    onClose();
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Configurar Componente</h3>
        {component.type === 'label' && (
          <div>
            <label>Texto:</label>
            <input 
              type="text" 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
            />
          </div>
        )}
        {component.type === 'input' && (
          <div>
            <label>Tipo de Entrada:</label>
            <select 
              value={inputType} 
              onChange={(e) => setInputType(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="password">Password</option>
              <option value="email">Email</option>
            </select>
          </div>
        )}
        {component.type === 'select' && (
          <div>
            <label>Opciones:</label>
            {options.map((option, index) => (
              <div key={index} className="option">
                <input 
                  type="text" 
                  value={option} 
                  onChange={(e) => handleOptionChange(index, e.target.value)} 
                />
                <button onClick={() => handleRemoveOption(index)}>Eliminar</button>
              </div>
            ))}
            <button onClick={handleAddOption}>Agregar Opción</button>
          </div>
        )}
        {component.type === 'button' && (
          <div>
            <label>Texto del Botón:</label>
            <input 
              type="text" 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
            />
            <label>Acción:</label>
            <select 
              value={action} 
              onChange={(e) => setAction(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="post">POST</option>
              <option value="put">PUT</option>
            </select>
          </div>
        )}
        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default ComponentConfigModal;
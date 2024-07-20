import React from 'react';

const Sidebar = ({ onDragStart }) => {
    return (
      <div className="sidebar">
        <h3>Componentes</h3>
        <div 
          className="draggable" 
          draggable 
          onDragStart={(e) => onDragStart(e, 'input')}
        >
          Input
        </div>
        <div 
          className="draggable" 
          draggable 
          onDragStart={(e) => onDragStart(e, 'select')}
        >
          Select
        </div>
        <div 
          className="draggable" 
          draggable 
          onDragStart={(e) => onDragStart(e, 'checkbox')}
        >
          Checkbox
        </div>
        <div 
          className="draggable" 
          draggable 
          onDragStart={(e) => onDragStart(e, 'label')}
        >
          Label
        </div>
        <div 
          className="draggable" 
          draggable 
          onDragStart={(e) => onDragStart(e, 'textarea')}
        >
          Textarea
        </div>
        <div 
          className="draggable" 
          draggable 
          onDragStart={(e) => onDragStart(e, 'button')}
        >
          Button
        </div>
      </div>
    );
  };
  
  export default Sidebar;
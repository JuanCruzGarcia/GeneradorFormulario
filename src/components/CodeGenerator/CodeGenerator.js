import React from 'react';

const CodeGenerator = ({ components }) => {
  const generateCode = () => {
    const code = `
      import React from 'react';
      import axios from 'axios';

      const MyForm = () => {
        // Función para manejar el envío del formulario
        const handleSubmit = async (event, action) => {
          event.preventDefault();
          
          let method = 'POST'; // Valor por defecto

          if (action === 'put') {
            method = 'PUT';
          } else if (action === 'delete') {
            method = 'DELETE';
          } else if (action === 'get') {
            method = 'GET';
          }

          try {
            const response = await axios({
              method,
              url: 'http://example.com/api', // Cambia esta URL por la de tu API
              data: {
                // Aquí puedes incluir los datos del formulario si es necesario
              }
            });
            
            console.log('Respuesta:', response.data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
        
          return (
          <form onSubmit={(e) => handleSubmit(e, 'default')}>
            ${components.map(component => {
              if (component.type === 'label') {
                return `
              <label>${component.text || 'Label'}</label>
                `;
              } else if (component.type === 'input') {
                return `
              <input type="${component.inputType || 'text'}" placeholder="Input" />
                `;
              } else if (component.type === 'select') {
                return `
              <select>
                ${component.options.map(option => `<option value="${option}">${option}</option>`).join('')}
              </select>
                `;
              } else if (component.type === 'checkbox') {
                return `
              <input type="checkbox" />
                `;
              } else if (component.type === 'textarea') {
                return `
              <textarea placeholder="Textarea"></textarea>
                `;
              } else if (component.type === 'button') {
                const action = component.action || 'default';
                return `
              <button type="submit" onClick={(e) => handleSubmit(e, '${action}')}>
                ${component.text || 'Button'}
              </button>
                `;
              }
              return '';
            }).join('')}
          </form>
        );
      };
      export default MyForm;`;
    
    navigator.clipboard.writeText(code);
    alert('Código copiado al portapapeles');
  };

  return (
    <button onClick={generateCode}>Generar Código</button>
  );
};

export default CodeGenerator;
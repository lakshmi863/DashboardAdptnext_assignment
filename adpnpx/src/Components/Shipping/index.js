import React, { useState } from 'react';
import { ShippingContainer } from './StyledComponents';
import './index.css'
const Shipping = () => {
    const [columns, setColumns] = useState([
        { id: 1, name: 'Image', enabled: true, position: 1 },
        { id: 2, name: 'Product Name', enabled: true, position: 2 },
        { id: 2, name: 'Price', enabled: false, position: 3 },
        { id: 2, name: 'SKU', enabled: true, position: 8 },
        { id: 2, name: 'Description', enabled: true, position: 4 },
        { id: 2, name: 'weight', enabled: true, position: 5 },
      ]);

      const handleToggle = (index) => {
        const newColumns = [...columns];
        newColumns[index].enabled = !newColumns[index].enabled;
        setColumns(newColumns);
      };
    
      const handlePositionChange = (index, newPosition) => {
        const newColumns = [...columns];
        newColumns[index].position = newPosition;
        setColumns(newColumns);
      };

    return (
        <div>

           
        <ShippingContainer>
        <img src="https://prisync.com/wp-content/uploads/2022/11/Shopify-Sales-Channels.png" alt="name" className='image_i'/>
             <div className="settings-container">
      <h2>Settings 2/3</h2>
      <h3>Shipping Table</h3>
      <p>Show or hide product fields from the listing tables. The position can also be set to follow a defined sequence.</p>

      <table>
        <thead>
          <tr>
            <th>Column Type</th>
            <th>Enable/Disable</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {columns.map((column, index) => (
            <tr key={column.id}>
              <td>{column.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={column.enabled}
                  onChange={() => handleToggle(index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={column.position}
                  onChange={(e) => handlePositionChange(index, e.target.value)}
                  disabled={column.name === 'Image'}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<div className='button_style'>
      <button type="button">Apply To</button>
      <button type="button">Separate Page</button>
      </div>
    </div>
        </ShippingContainer>
        </div>
    );
};

export default Shipping;

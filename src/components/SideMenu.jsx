import React from 'react';
import { useAppContext } from '../context/AppContext';

const SideMenu = () => {
  const { currentPage, setCurrentPage } = useAppContext();

  const menuItems = [
    { id: 'apps', label: 'Apps' },
    { id: 'documents', label: 'Documents' }
  ];

  return (
    <div style={{
      width: '200px',
      backgroundColor: '#f1f1f1',
      padding: '20px',
      height: '100%',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {menuItems.map((item) => (
          <li 
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            style={{
              padding: '10px 15px',
              margin: '5px 0',
              cursor: 'pointer',
              backgroundColor: currentPage === item.id ? '#2c3e50' : 'transparent',
              color: currentPage === item.id ? 'white' : 'black',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
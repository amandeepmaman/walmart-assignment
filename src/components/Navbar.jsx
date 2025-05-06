import React from 'react';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useAppContext();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#2c3e50',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Logo
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '4px',
            border: 'none',
            width: '250px',
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
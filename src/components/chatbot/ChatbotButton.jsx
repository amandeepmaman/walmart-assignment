import React from 'react';
import { useAppContext } from '../../context/AppContext';

const ChatbotButton = () => {
  const { toggleChatbot } = useAppContext();

  return (
    <button
      onClick={toggleChatbot}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#2c3e50',
        color: 'white',
        border: 'none',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        zIndex: 1000,
      }}
    >
      💬
    </button>
  );
};

export default ChatbotButton;
import React from 'react';
import useChatbot from '../../hooks/useChatbot';

const ChatHeader = () => {
  const { elapsedTime, handleReset, handleClose } = useChatbot();

  return (
    <div style={{
      padding: '12px 15px',
      backgroundColor: '#2c3e50',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    }}>
      <div>
        <span>Chat Assistant</span>
        <span style={{ marginLeft: '10px', fontSize: '14px' }}>
          {elapsedTime}s
        </span>
      </div>
      <div>
        <button
          onClick={handleReset}
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
        <button
          onClick={handleClose}
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
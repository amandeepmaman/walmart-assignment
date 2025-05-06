import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const InputView = () => {
  const [inputText, setInputText] = useState('');
  const { addMessage } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      addMessage(inputText);
      setInputText('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: '15px',
        borderTop: '1px solid #e1e1e1',
        display: 'flex',
      }}
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your message..."
        style={{
          flex: 1,
          padding: '12px 15px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        style={{
          marginLeft: '10px',
          padding: '8px 12px',
          backgroundColor: '#2c3e50',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        Send
      </button>
    </form>
  );
};

export default InputView;
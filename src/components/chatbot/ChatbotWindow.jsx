import React from 'react';
import ChatHeader from './ChatHeader';
import MessageView from './MessageView';
import InputView from './InputView';

const ChatbotWindow = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{
      position: 'fixed',
      bottom: isMobile ? 0 : '20px',
      right: isMobile ? 0 : '20px',
      width: isMobile ? '100%' : '400px',
      height: isMobile ? '100%' : '600px',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      borderRadius: isMobile ? 0 : '8px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1001,
    }}>
      <ChatHeader />
      <MessageView />
      <InputView />
    </div>
  );
};

export default ChatbotWindow;
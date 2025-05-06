import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

const MessageView = () => {
  const { messages } = useAppContext();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div style={{
      flex: 1,
      padding: '15px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {messages.length === 0 ? (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          color: '#888',
          flexDirection: 'column'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>👋</div>
          <div>How can I help you today?</div>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            style={{
              alignSelf: message.isUser ? 'flex-end' : 'flex-start',
              backgroundColor: message.isUser ? '#2c3e50' : '#f1f1f1',
              color: message.isUser ? 'white' : 'black',
              padding: '10px 15px',
              borderRadius: '18px',
              maxWidth: '70%',
              marginBottom: '10px',
              wordBreak: 'break-word',
            }}
          >
            <div>{message.text}</div>
            <div style={{ 
              fontSize: '12px', 
              marginTop: '5px',
              textAlign: message.isUser ? 'right' : 'left',
              opacity: 0.7
            }}>
              {message.timestamp}
            </div>
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageView;
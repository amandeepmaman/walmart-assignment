import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import ContentArea from './components/ContentArea';
import ChatbotButton from './components/chatbot/ChatbotButton';
import ChatbotWindow from './components/chatbot/ChatbotWindow';
import { useAppContext } from './context/AppContext';

function App() {
  const { isChatbotOpen } = useAppContext();

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <SideMenu />
        <ContentArea />
      </div>
      <ChatbotButton />
      {isChatbotOpen && <ChatbotWindow />}
    </div>
  );
}

export default App;
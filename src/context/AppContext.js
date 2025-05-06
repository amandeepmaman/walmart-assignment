import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("apps"); // 'apps' or 'documents'
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  const resetChatbot = () => {
    setMessages([]);
  };

  const addMessage = (message, isUser = true) => {
    const newMessage = {
      id: Date.now(),
      text: message,
      isUser,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, newMessage]);

    // If user message, generate a bot response after a short delay
    if (isUser) {
      setTimeout(() => {
        const botResponses = [
          "I'm here to help! What else would you like to know?",
          "That's an interesting question. Let me think about it.",
          "Thanks for your message. Could you provide more details?",
          "I understand what you're asking. Here's what I can tell you...",
          "I appreciate your question. Let me assist you with that.",
        ];
        const randomResponse =
          botResponses[Math.floor(Math.random() * botResponses.length)];
        addMessage(randomResponse, false);
      }, 1000);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        isChatbotOpen,
        toggleChatbot,
        closeChatbot,
        searchQuery,
        setSearchQuery,
        messages,
        addMessage,
        resetChatbot,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

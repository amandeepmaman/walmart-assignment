import { useState, useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";

const useChatbot = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const { isChatbotOpen, closeChatbot, resetChatbot } = useAppContext();

  const resetTimer = () => {
    setElapsedTime(0);
  };

  const handleReset = () => {
    resetChatbot();
    resetTimer();
  };

  const handleClose = () => {
    closeChatbot();
    resetTimer();
  };

  useEffect(() => {
    // Start timer when chatbot opens
    if (isChatbotOpen) {
      resetTimer();
      timerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }

    // Clear interval when chatbot closes
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isChatbotOpen]);

  return {
    elapsedTime,
    handleReset,
    handleClose,
  };
};

export default useChatbot;

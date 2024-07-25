// ChatContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(() => {
    const storedState = localStorage.getItem('isChatOpen');
    return storedState === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isChatOpen', isChatOpen);
  }, [isChatOpen]);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <ChatContext.Provider value={{ isChatOpen, handleOpenChat, handleCloseChat }}>
      {children}
    </ChatContext.Provider>
  );
};

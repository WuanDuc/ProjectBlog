import logo from './logo.svg';
import './App.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import MainPage from './modules/MainPage/MainPage';
import ProfilePage from './modules/Profile/Profile';
import ChatWindow from './components/ChatWindow';
import { useChat } from './hooks/ChatHook';
import TopBar from './components/TopBar';
import router from './hooks/router';
function App() {
  const { isChatOpen, handleCloseChat } = useChat();

  // Update local storage whenever isChatOpen changes
  useEffect(() => {
    localStorage.setItem('isChatOpen', isChatOpen);
  }, [isChatOpen]);

  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
      {isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    </div>
    
  );
}

export default App;

import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [friends] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]);

  const [selectedFriendId, setSelectedFriendId] = useState(null);

  const [chats, setChats] = useState([
    {
      userID1: 0,
      userID2: 1,
      messages: [
        { sender: 'Alice', text: 'Hey there!', timestamp: '10:00 AM' },
        { sender: 'You', text: 'Hello Alice!', timestamp: '10:01 AM' },
      ],
    },
    {
      userID1: 0,
      userID2: 2,
      messages: [
        { sender: 'Bob', text: 'How are you?', timestamp: '10:05 AM' },
        { sender: 'You', text: 'I am good, Bob!', timestamp: '10:06 AM' },
      ],
    },
    {
      userID1: 0,
      userID2: 3,
      messages: [
        { sender: 'Charlie', text: 'Let\'s meet up!', timestamp: '10:10 AM' },
        { sender: 'You', text: 'Sure, Charlie!', timestamp: '10:11 AM' },
      ],
    },
  ]);

  const [input, setInput] = useState('');

  const selectFriend = (friendId) => {
    setSelectedFriendId(friendId);
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        sender: 'You',
        text: input,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setChats((prevChats) => {
        const updatedChats = prevChats.map((chat) => {
          if ((chat.userID1 === 0 && chat.userID2 === selectedFriendId) || (chat.userID1 === selectedFriendId && chat.userID2 === 0)) {
            return { ...chat, messages: [...chat.messages, newMessage] };
          }
          return chat;
        });
        return updatedChats;
      });

      setInput('');
    }
  };

  return (
    <div className="chat-page">
      <div className="main-content">
        <div className="friends-list">
          <h2>Friends</h2>
          {friends.map((friend) => (
            <div
              key={friend.id}
              className={`friend ${friend.id === selectedFriendId ? 'selected' : ''}`}
              onClick={() => selectFriend(friend.id)}
            >
              {friend.name}
            </div>
          ))}
        </div>
        {selectedFriendId !== null && (
          <div className="chat-window">
            <h2>Chat with {friends.find((f) => f.id === selectedFriendId).name}</h2>
            <div className="message-container">
              {chats.find((chat) => (chat.userID1 === 0 && chat.userID2 === selectedFriendId) || (chat.userID1 === selectedFriendId && chat.userID2 === 0)).messages.map((message, index) => (
                <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                  <div className="message-info">
                    <span className="sender">{message.sender}</span>
                    <span className="timestamp">{message.timestamp}</span>
                  </div>
                  <div className="text">{message.text}</div>
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;

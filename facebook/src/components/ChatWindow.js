import React, { useState } from 'react';

function ChatWindow({ onClose }) {
    return (
      <div style={styles.chatWindow}>
        <div style={styles.chatHeader}>
          <span>Chat</span>
          <button onClick={onClose} style={styles.closeButton}>×</button>
        </div>
        <div style={styles.chatContent}>
          <div>Chat messages will appear here.</div>
        </div>
        <div style={styles.chatInputContainer}>
          <input type="text" placeholder="Type a message..." style={styles.chatInput} />
          <button style={styles.sendButton}>Send</button>
        </div>
      </div>
    );
  }
const styles = {
    chatWindow: {
        position: 'fixed',
        bottom: '0',
        right: '20px',
        width: '300px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px 5px 0 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      },
      chatHeader: {
        padding: '10px',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: '5px 5px 0 0',
      },
      closeButton: {
        background: 'none',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
      },
      chatContent: {
        padding: '10px',
        height: '150px',
        overflowY: 'auto',
      },
      chatInputContainer: {
        padding: '10px',
        borderTop: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      chatInput: {
        width: '80%',
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      },
      sendButton: {
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white',
      },
}
export default ChatWindow;
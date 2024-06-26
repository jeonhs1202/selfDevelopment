import React from 'react';

const ChatHistory = ({ messages }) => {
  return (
    <div className="history-container">
      {messages.map((message, index) => (
        <div className="message" key={index}>
          <span className="sender">ME: </span>{message}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;

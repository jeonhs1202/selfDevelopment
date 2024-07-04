import React,{ useState }  from 'react';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="app-container">
      <div className="header">
        <div className="arrow-left">&#9664;</div>
        <h1>Retro Chat</h1>
      </div>
      <ChatHistory messages={messages} />
      <ChatInput onSend={addMessage} />
    </div>
  );
};

export default ChatContainer;
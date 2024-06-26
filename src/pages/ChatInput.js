import React, { useState } from 'react';


const ChatInput = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = (bool) => {
    if (inputValue.trim() !== '' && !bool) {
      onSend(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="chat-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend(e.nativeEvent.isComposing)}
      />
      <button className="send-button" onClick={function() {handleSend(false)}}>Send</button>
    </div>
  );
};

export default ChatInput;
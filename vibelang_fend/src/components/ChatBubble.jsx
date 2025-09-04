import React from 'react';

const ChatBubble = ({ message, isSender }) => {
  const bubbleStyle = {
    maxWidth: '70%',
    padding: '10px 15px',
    borderRadius: 20,
    backgroundColor: isSender ? '#4e8cff' : '#e5e5e5',
    color: isSender ? '#fff' : '#000',
    alignSelf: isSender ? 'flex-end' : 'flex-start',
    marginBottom: '8px',
  };

  return <div style={bubbleStyle}>{message.text}</div>;
};

export default ChatBubble;

import React, {useEffect, useState} from 'react';
import ChatInput from './ChatInput';

const Messages = ({ socket, currentUser }) => {
    const [messages, setMessages] = useState([])
    
    const addMessage = msg => {
        setMessages([...messages, msg])
    }

    useEffect(() => {
        const loadMessages =  () => {
            fetch('http://localhost:3001/messages')
            .then(response => response.json())
            .then(data => {
                setMessages(data)
            })
        }
        loadMessages()
    },[])

  return (
  <div>
      {messages.map(msg => <p key={msg.content}>{`${msg.user} ${msg.time} ${msg.content}`}</p>)}
      <ChatInput socket={socket} addMessage={addMessage} currentUser={currentUser}/>
  </div>
  );
};

export default Messages;

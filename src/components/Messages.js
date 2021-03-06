import React, {useEffect, useState, useRef} from 'react';
import ChatInput from './ChatInput';
import MessageLine from './MessageLine';

import { Container, Box, Typography } from '@mui/material';

const Messages = ({ socket, currentUser }) => {
    const [messages, setMessages] = useState([])
    const chatBox = useRef()
    
    const addMessage = msg => {
        setMessages([...messages, msg])
    }

    socket.on('sent message', (message) => {
        addMessage(message)
      })

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

    useEffect(() => {
        chatBox.current.scrollTop = chatBox.current.scrollHeight
    }, [messages])

  return (
      <>
        <Container>
            <Box id="chatbox" sx={{ height:"300px", width: "800px", my: 2, overflow:"auto", border:"solid", backgroundColor:"grey" }} ref={chatBox}>
                {messages.map(msg => <MessageLine key={msg._id} msg={msg} currentUser={currentUser}/>)}
            </Box>
        <ChatInput socket={socket} addMessage={addMessage} currentUser={currentUser}/>
      </Container>
      </>
  );
};

export default Messages;

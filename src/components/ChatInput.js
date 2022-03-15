import React, {useState } from 'react';

import { Box, Button, TextField } from '@mui/material';

const ChatInput = ({ socket, addMessage, currentUser }) => {
  const [msgForm, setMsgForm] = useState("")

  const getTimeStamp = () => {
    const date = new Date()
    const hours = date.getHours().toString()
    const minutes = date.getMinutes().toString()
    const seconds = date.getSeconds().toString()
    return `${hours}:${addZeroToTime(minutes)}:${addZeroToTime(seconds)}` 
  }

  //formats the minutes and seconds to appear with a zero if less than 10
  const addZeroToTime = num => {
    return num < 10 ? `0${num}` : num
  }

  const handleChange = e => {
      setMsgForm(e.target.value)
    }
  
  const handleSubmit = e => {
    e.preventDefault()
    if (msgForm) {
      const msgObject = {user:currentUser, content: msgForm, time: getTimeStamp()}
      socket.emit('send message', msgObject)
      setMsgForm("")
      sendMessageToDB(msgObject)
    }
  }
  const sendMessageToDB = msg => {
    const options = {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(msg)
    }
    fetch('http://localhost:3001/messages', options)
    .then(response => response.json())
    .then(data => addMessage(data))
  }
   
  return (
    <>
  <Box component="form" onSubmit={handleSubmit}>
    <TextField 
      sx={{width:"400px"}}
      type="text" 
      name="message" 
      value={msgForm } 
      onChange={handleChange}
    />
    <Button variant="contained">
      Send Message
    </Button >
  </Box>
    </>
  )
};

export default ChatInput;

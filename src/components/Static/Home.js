import React, { useState} from 'react';
import io from 'socket.io-client';
import Messages from '../Chat/Messages';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react'


const Home = () => {
  const EP = `localhost:3001`
  const [currentUser, setCurrentUser] = useState(null)
  const [socket, setSocket] = useState(null)
  const { isAuthenticated } = useAuth0()
  const auth = useAuth0()

  const loginUser = user => {
    setCurrentUser(user)
    initiateSocket()
  }

  const logOff = () => {
    socket.emit('log off')
    socket.disconnect()
    setCurrentUser(null)
}

  const initiateSocket = () => {
    const newSocket = io(EP)
    setSocket(newSocket)
  }

  if (currentUser) return (
    <>
    <h1>Chat World</h1>
    <h2>Hello {currentUser},</h2>
    <h2>Welcome back!</h2>
    <Messages socket={socket} currentUser={currentUser}/>
    <Button variant="contained" onClick={logOff}>Log Off</Button>
    </>
  );

  return (
    <>
    <h1>Chat World</h1>
    </>
  )
}

export default Home;
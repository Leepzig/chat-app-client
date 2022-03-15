import React, {useState} from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import Login from './Login';
import { Button } from '@mui/material';


const Home = () => {
  const EP = `localhost:3001`
  const [currentUser, setCurrentUser] = useState(null)
  const [socket, setSocket] = useState(null)

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
    <Login loginUser={loginUser} />
    </>
  )
}

export default Home;
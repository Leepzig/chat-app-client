import React, {useState} from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import Login from './Login';


const Home = () => {
  const EP = `localhost:3001`
  const [currentUser, setCurrentUser] = useState(null)
  const socket = io(EP)
  const loginUser = user => {
    setCurrentUser(user)
  }
  
  if (currentUser) return (
    <>
    <h1>Chat World</h1>
    <h2>Hello {currentUser.username},</h2>
    <h2>Welcome back!</h2>
    <Messages socket={socket} currentUser={currentUser}/>
    </>
  );

  return (
    <>
    <h1>Chat World</h1>
    <Login loginUser={loginUser}/>
    </>
  )
}

export default Home;
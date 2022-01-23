import React, {useState} from 'react';
import './App.css';
import io from 'socket.io-client';
import Messages from './components/Messages';
import Login from './components/Login';


function App() {
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
    <Login loginUser={loginUser}/>
    </>
  )
}

export default App;


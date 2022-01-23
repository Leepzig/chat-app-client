import React, {useState, useEffect} from 'react';
import './App.css';
import io from 'socket.io-client';
import Messages from './components/Messages';
import Login from './components/Login';


function App() {
  const EP = `localhost:3001`
  const [socket, setSocket] = useState(null)
  const [form, setForm] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  
  const loginUser = user => {
    setCurrentUser(user)
  }
 
  useEffect(() => {
    const createdSocket = io(EP)
    setSocket(createdSocket)
  },[EP])


  
  if (currentUser) return (
    <>
    <h1>{currentUser.username} Welcome to Chat World!</h1>
    <Messages socket={socket} currentUser={currentUser}/>
    </>
  );

  return (
    <>
    <h1>Enter your name to sign in to Chat World:</h1>
    <Login loginUser={loginUser}/>
    </>
  )
}

export default App;


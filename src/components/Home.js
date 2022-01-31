import React, {useState} from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import Login from './Login';


const Home = () => {
  const EP = `localhost:3001`
  const [currentUser, setCurrentUser] = useState(null)
  const [socket, setSocket] = useState(null)

  const loginUser = user => {
    setCurrentUser(user)
    initiateSocket()
    // console.log(socket)
  }

  const initiateSocket = () => {
    const newSocket = io(EP)
    setSocket(newSocket)
  }

  const connectUserToSocket = (user, socketId) => {
    console.log("socket id:", socket.id)
    const options = {
        method:"PATCH",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({...user, socketId:socketId})
    }
    fetch(`http://localhost:3001/users/${user.id}`, options)
    .then(response => response.json())
    .then(data => {
      // debugger
      console.log(data[0])
      setCurrentUser(data[0])
    })
    //socket doesn't exist when this is called
}

  if (socket) socket.on('connect user', (socketId) =>{
    connectUserToSocket(currentUser, socketId)
  })

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
    <Login loginUser={loginUser} socket={socket}/>
    </>
  )
}

export default Home;
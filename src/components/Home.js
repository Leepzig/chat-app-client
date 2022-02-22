import React, {useState} from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import Login from './Login';

//We're setting current user twice, once in loginUser, and another in connectUserToSocket
//We set it in login, but with that version that current user doesn't ahve the correct socketID,
// then we overwrite it with the correct socketID in connectUserToSocket
//Is that a good idea? Probably not

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

//   const connectUserToSocket = (user, socketId) => {
//     const options = {
//         method:"PATCH",
//         headers:{
//             "Accept":"application/json",
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({...user, socketId:socketId})
//     }
//     fetch(`http://localhost:3001/users/${user.id}`, options)
//     .then(response => response.json())
//     .then(data => {
//       setCurrentUser(data)
//     })
// }

  //another way to implement this?
  // if (socket) socket.on('connect user', (socketId) =>{
  //   connectUserToSocket(currentUser, socketId)
  // })

  if (currentUser) return (
    <>
    <h1>Chat World</h1>
    <h2>Hello {currentUser},</h2>
    <h2>Welcome back!</h2>
    <Messages socket={socket} currentUser={currentUser}/>
    <button onClick={logOff}>Log Off</button>
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
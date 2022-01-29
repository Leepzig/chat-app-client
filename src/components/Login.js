import React, { useEffect, useState } from 'react';

const Login = ({loginUser, socket}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const loadUsers = () => {
            fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(data => setUsers(data))
        }
        loadUsers()
    },[])



    const handleSubmit = (e, user) => {
        e.preventDefault()
        loginUser(user)
        // connectUserToSocket(user)
    }

  return (
      <>
        <h3>Login with your account:</h3>
        <form onSubmit={handleSubmit}>
            {users.map(user => <button key={user.id} onClick={(e) => handleSubmit(e, user)}>{user.username}</button>)}
        </form>


      
      
      </>
  );
};

export default Login;

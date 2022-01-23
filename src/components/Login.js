import React, { useEffect, useState } from 'react';

const Login = ({loginUser}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const loadUsers = () => {
            fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(data => setUsers(data))
        }
        loadUsers()
    },[])

    const changeUserStatus = (user) => {
        const options = {
            method:"PATCH",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }
        fetch(`http://localhost:3001/users/${user.id}`, options)
        .then(response => response.json())
        .then(data => {console.log(data)})
    }

    const handleSubmit = (e, user) => {
        e.preventDefault()
        loginUser(user)
        changeUserStatus(user)
    }

  return (
      <>
        <h1>Chat World</h1>
        <h3>Login with your account:</h3>
        <form onSubmit={handleSubmit}>
            {users.map(user => <button key={user.id} onClick={(e) => handleSubmit(e, user)}>{user.username}</button>)}
        </form>


      
      
      </>
  );
};

export default Login;

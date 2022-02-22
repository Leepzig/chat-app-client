import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const Login = ({loginUser}) => {
    // const [users, setUsers] = useState([])
    const [form, setForm] = useState({username:""})

    // useEffect(() => {
    //     const loadUsers = () => {
    //         fetch("http://localhost:3001/users")
    //         .then(response => response.json())
    //         .then(data => setUsers(data))
    //     }
    //     loadUsers()
    // },[])

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(form.username)
    }
    // const handleSubmit = (e, user) => {
    //     e.preventDefault()
    //     loginUser(user)
    // }

  return (
      <>
        <h3>Login with your account:</h3>
        {/* <form onSubmit={handleSubmit}>
            {users.map(user => <button disabled={user.online} key={user.id} onClick={(e) => handleSubmit(e, user)}>{user.username}</button>)}
        </form> */}
        <Box component="form" onSubmit={handleSubmit}>
            <TextField  label="Username" name='username' value={form.username} onChange={handleChange}/>
            <Button variant="contained">Login</Button>
        </Box>
      </>
  );
};

export default Login;

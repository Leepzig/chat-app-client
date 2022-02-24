import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const Login = ({loginUser}) => {

    const [form, setForm] = useState({username:""})



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

  return (
      <>
        <h3>Login with your account:</h3>

        <Box component="form" onSubmit={handleSubmit}>
            <TextField  label="Username" name='username' value={form.username} onChange={handleChange}/>
            <Button variant="contained">Login</Button>
        </Box>
      </>
  );
};

export default Login;

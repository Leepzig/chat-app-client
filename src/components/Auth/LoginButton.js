import { Box, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0()

    const handleLogin = e => {
        // debugger
        loginWithRedirect()
        console.log('login clicked')
    }

  return (
      <>
        <h3>Login with your account:</h3>

            <Button onClick={handleLogin} variant="contained">Login</Button>

      </>
  );
};

export default LoginButton;

import React from 'react'
import { Button } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0()

    const handleLogout = e => {
        logout()
        console.log('logout clicked')
    }

  return (
    <Button onClick={handleLogout}>Logout</Button>
  )
}

export default LogoutButton
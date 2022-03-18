import React from 'react'
import LoginButton from '../Auth/LoginButton'
import LogoutButton from '../Auth/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

const LoginLogout = () => {
    const { isAuthenticated } = useAuth0()

  return (
    <>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </>

  )
}

export default LoginLogout
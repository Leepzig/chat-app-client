import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom'
import LoginLogout from './LoginLogout';
// import UserAvatar from './UserAvatar';
import { Tooltip } from '@mui/material';
import { Avatar } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react'
// TODO clean and DRY this code up
// TODO the code needs to be changed so that it's more easily scaleable
const pages = [{title:"Home", link:'/home'}, {title:"About Us", link:'/about'}]
const Navbar = () => {
  // const [pages, setPages] = useState(noUserPages)
  const { isAuthenticated } = useAuth0()
  const { user } = useAuth0()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //moving anchorElUser state to UserAvatar componenet
  //moving handleOpenUserMenu to UserAvatar
  //moving handleCloseUserMenu to UserAvatar

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    // dispatch(logout())
    handleCloseNavMenu(null)
  }

    return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Chat App
          </Typography>
      {/* TODO: Learn this! */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                {pages.map(page=> 
                <MenuItem key={page.title} id={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to={page.link}>{page.title}</NavLink></Typography>
                </MenuItem>)}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Chat App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><NavLink to={page.link}>
                {page.title}
                </NavLink>
              </Button>
            ))}
            {/* <UserAvatar /> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <LoginLogout />
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                { isAuthenticated ? <Avatar alt={user.name} src={user.picture} /> : null}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default Navbar

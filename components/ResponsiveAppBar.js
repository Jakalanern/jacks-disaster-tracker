import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import styles from '../styles/Nav.module.css'
import Donate from './Donate'

const pages = [
  'Fires',
  'Volcanos',
  'Wildfire Relief Fund 2022',
  // 'Red Tide',
  // 'Earthquakes',
  // 'Snow',
  // 'Drought',
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const ResponsiveAppBar = ({ changeEvent }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const changeEventHandler = (page) => {
    if (page === 'Fires') {
      changeEvent(8)
    } else if (page === 'Volcanos') {
      changeEvent(12)
    } else if (page === 'Red Tide') {
      changeEvent(13)
    } else if (page === 'Earthquakes') {
      changeEvent(16)
    } else if (page === 'Snow') {
      changeEvent(17)
    } else if (page === 'Drought') {
      changeEvent(6)
    } else if (page === 'Wildfire Relief Fund 2022') {
      window.open('https://www.gofundme.com/f/wildfirerelieffund')
    }
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <nav className={styles.map}>
      <AppBar
        position='fixed'
        sx={{ display: 'flex', justifyContent: 'center', minHeight: '68px' }}>
        <Container maxWidth='100%' sx={{ m: 0 }}>
          <Toolbar disableGutters>
            <LocalFireDepartmentIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
            />
            <Typography
              variant='h6'
              noWrap
              component='span'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}>
              Disaster Tracker
            </Typography>
            <LocalFireDepartmentIcon
              sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1.5,
              }}
            />
            <Typography
              variant='h6'
              noWrap
              component='span'
              href=''
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: {
                  xs: '15px',
                  sm: '20px',
                },
              }}>
              Disaster Tracker
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'flex',
                  md: 'none',
                },
                justifyContent: 'flex-end',
              }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'>
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
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
                }}>
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu()
                      changeEventHandler(page)
                    }}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'end',
              }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu()
                    changeEventHandler(page)
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}></IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  )
}
export default ResponsiveAppBar

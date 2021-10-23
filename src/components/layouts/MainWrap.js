import * as React from 'react'
import { Box, AppBar, Stack, Toolbar, IconButton } from '@mui/material'
import { useAuth } from '../../providers/auth'
import MainMenu from '../menus/MainMenu'
import UserMenu from '../menus/UserMenu'
import Logo from './Logo'
import MenuIcon from '@mui/icons-material/Menu'

export default function MainWrap ({ children, title }) {
  const { isAuthenticated } = useAuth()

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        sx={{
          px: 2,
          py: 1,
          boxShadow: 0,
          bgcolor: 'background.paper',
          '&.MuiPaper-root': { borderBottom: 1, borderColor: 'grey.300' }
        }}
        position='fixed'
      >
        <Stack
          spacing={2}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Toolbar
              variant='dense'
              sx={{ paddinLeft: 0, marginLeft: 0, minHeight: 'auto', mx: 0, display: { xs: 'block', sm: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <IconButton edge='start'>
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <Logo />
          </Box>
          {isAuthenticated && (
            <UserMenu />
          )}
        </Stack>

      </AppBar>
      <MainMenu
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, mt: 7, width: { sm: 'calc(100% - 240px)' } }}
      >
        <Box sx={{ fontSize: 25, fontWeight: 500, mb: 2 }}>{title}</Box>
        {children}
      </Box>
    </Box>

  )
}

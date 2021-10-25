import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box, Toolbar } from '@mui/material'

// icons:
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import NotificationsIcon from '@mui/icons-material/Notifications'

const mainListItems = (
  <div>
    <ListItem button component={RouterLink} to='/dashboard'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
    <ListItem button component={RouterLink} to='/products'>
      <ListItemIcon>
        <ProductionQuantityLimitsIcon />
      </ListItemIcon>
      <ListItemText primary='Products' />
    </ListItem>
    <ListItem button component={RouterLink} to='/notifications'>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary='Notifications' />
    </ListItem>
    <ListItem button component={RouterLink} to='/sessions'>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary='Sessions' />
    </ListItem>
  </div>
)

const drawerWidth = 240

export default function MainMenu ({ mobileOpen, handleDrawerToggle }) {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar />
        <List>{mainListItems}</List>
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: '57px' }
        }}
        open
      >
        <List>{mainListItems}</List>
      </Drawer>
    </Box>
  )
}

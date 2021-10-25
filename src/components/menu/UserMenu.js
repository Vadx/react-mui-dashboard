import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Menu, MenuItem, ListItemIcon, Divider, Button } from '@mui/material'
import Logout from '@mui/icons-material/Logout'
import { useAuth } from '../../providers/auth'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function UserMenu () {
  const { logout } = useAuth()
  const history = useHistory()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    logout()
    history.push('/login')
    setAnchorEl(null)
  }
  return (
    <>
      <Button
        onClick={handleClick}
        size='small'
        sx={{
          ml: 2,
          color: 'grey.700',
          fontSize: 15,
          fontWeight: 600
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        User Name
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

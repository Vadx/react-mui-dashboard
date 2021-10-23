import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Stack, Link, Divider } from '@mui/material'

export default function AuthMenu () {
  return (
    <Stack
      direction='row'
      divider={<Divider orientation='vertical' flexItem />}
      spacing={2}
    >
      <Link
        component={RouterLink}
        to='/login'
        sx={{
          textDecoration: 'none',
          color: 'grey.700',
          fontSize: 15,
          fontWeight: 600
        }}
      >Log In
      </Link>
      <Link
        component={RouterLink}
        to='/signup'
        sx={{
          textDecoration: 'none',
          color: 'grey.700',
          fontSize: 15,
          fontWeight: 600
        }}
      >Sign Up
      </Link>
    </Stack>
  )
}

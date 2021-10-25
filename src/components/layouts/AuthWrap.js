import React from 'react'
import { Paper, Container, Typography, AppBar, Stack } from '@mui/material'
import Logo from './Logo'
import { useAuth } from '../../providers/auth'
import AuthMenu from '../menu/AuthMenu'

export default function AuthWrap ({ children, title }) {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <AppBar
        sx={{
          px: 2,
          py: 1,
          boxShadow: 0,
          bgcolor: 'background.paper',
          '&.MuiPaper-root': { borderBottom: 1, borderColor: 'grey.300' }
        }}
        position='relative'
      >
        <Stack
          spacing={2}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Logo />
          {!isAuthenticated && (
            <AuthMenu />
          )}
        </Stack>
      </AppBar>
      <Container maxWidth='sm'>
        <Paper
          sx={{
            my: 20,
            mx: 2,
            py: 3,
            px: 5,
            display: 'flex',
            flexDirection: 'column'
          }}
          elevation={0}
        ><Typography variant='h6' fontWeight={500} textAlign='center' component='h3' mb={4}>{title}</Typography>
          {children}
        </Paper>
      </Container>
    </>
  )
}

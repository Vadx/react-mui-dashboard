import React from 'react'
import { Button, Box, TextField } from '@mui/material'
import AuthWrap from '../../components/layouts/AuthWrap'

export default function ForgotPassword () {
  return (
    <>
      <AuthWrap title='Forgot Password'>
        <Box mb={3.5}>
          <Box fontWeight={600} fontSize={15} mb={0.5}>Email</Box>
          <TextField
            id='outlined-email-input'
            type='email'
            name='email'
            autoComplete='email'
            variant='outlined'
            size='small'
            fullWidth
          />
        </Box>
        <Box textAlign='right'>
          <Button
            sx={{
              px: 3,
              fontSize: 15
            }}
            to=''
            variant='contained'
            color='primary'
          >Send
          </Button>
        </Box>
      </AuthWrap>
    </>
  )
}

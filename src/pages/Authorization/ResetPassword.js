import React from 'react'
import { Button, Box, TextField } from '@mui/material'
import AuthWrap from '../../components/layouts/AuthWrap'

export default function ResetPassword () {
  return (
    <>
      <AuthWrap title='Reset Password'>
        <Box mb={3.5}>
          <Box fontWeight={600} fontSize={15} mb={0.5}>Password</Box>
          <TextField
            id='outlined-password-input'
            type='password'
            name='password'
            variant='outlined'
            size='small'
            fullWidth
          />
        </Box>
        <Box mb={3.5}>
          <Box fontWeight={600} fontSize={15} mb={0.5}>Re-Password</Box>
          <TextField
            id='outlined-re-password-input'
            type='password'
            name='re-password'
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
          >Save
          </Button>
        </Box>
      </AuthWrap>
    </>
  )
}

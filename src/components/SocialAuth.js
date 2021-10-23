import * as React from 'react'
import Box from '@mui/material/Box'

import { IconButton } from '@mui/material'
import GoogleIcon from '../assets/GoogleIcon'
import MicrosoftIcon from '../assets/MicrosoftIcon'

export default function SocialAuth () {
  return (
    <>
      <Box
        sx={{
          fontSize: 17,
          color: 'grey.500',
          textAlign: 'center',
          marginBottom: 0.7
        }}
      >Or continue with
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <IconButton>
          <GoogleIcon />
        </IconButton>
        <IconButton>
          <MicrosoftIcon />
        </IconButton>
      </Box>
    </>
  )
}

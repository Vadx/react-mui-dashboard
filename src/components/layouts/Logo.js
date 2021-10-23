import * as React from 'react'
import Box from '@mui/material/Box'

export default function Logo () {
  return (
    <>
      <Box
        component='span'
        sx={{
          fontSize: 26,
          color: 'primary.main',
          fontWeight: 700
        }}
      >MUI
        <Box
          component='span'
          sx={{
            fontSize: 26,
            color: 'grey.900',
            fontWeight: 400
          }}
        >Dashboard
        </Box>
      </Box>
    </>
  )
}

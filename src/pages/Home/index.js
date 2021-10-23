import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export default function Home() {
  return (
    <>
      <Container maxWidth='sm'>
        <Box sx={{ my: 20, textAlign: 'center' }}>
          <Box
            component='span'
            sx={{
              fontSize: 56,
              color: 'primary.main',
              fontWeight: 700
            }}
          >MUI
            <Box
              component='span'
              sx={{
                fontSize: 56,
                color: 'grey.900',
                fontWeight: 400
              }}>Dashboard
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

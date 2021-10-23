import React from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { Button, Box, TextField, Link, Stack } from '@mui/material'
import AuthWrap from '../../components/layouts/AuthWrap'
import { useFormik } from 'formik'
import { loginSchema } from '../../helpers/validation'
import { useAuth } from '../../providers/auth'
import SocialAuth from '../../components/SocialAuth'

export default function Login () {
  const { signIn } = useAuth()
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      email: 'admin@evnext.com',
      password: '123456'
    },
    validationSchema: loginSchema,
    onSubmit: () => {
      signIn()
      history.push('/dashboard')
    }
  })

  return (
    <>
      <AuthWrap title='Login'>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={3}>
            <Box fontWeight={600} fontSize={15} mb={0.5}>Email</Box>
            <TextField
              id='outlined-email-input'
              type='email'
              name='email'
              autoComplete='email'
              variant='outlined'
              size='small'
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box mb={3}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'
              spacing={2}
            >
              <Box fontWeight={600} fontSize={15} mb={0.5}>Password</Box>
              <Link
                component={RouterLink}
                to='/forgot-password'
                sx={{
                  textDecoration: 'none',
                  color: 'grey.600',
                  fontSize: 12
                }}
              >Forget password?
              </Link>
            </Stack>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              id='password'
              name='password'
              type='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <Button
              sx={{
                px: 3,
                fontSize: 15
              }}
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
            >Sign In
            </Button>
          </Box>
          <SocialAuth />
        </form>
      </AuthWrap>
    </>
  )
}

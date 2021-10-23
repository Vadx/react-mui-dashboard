import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Box, TextField, Stack } from '@mui/material'
import AuthWrap from '../../components/layouts/AuthWrap'
import { useFormik } from 'formik'
import { useAuth } from '../../providers/auth'
import { signUpSchema } from '../../helpers/validation'
import SocialAuth from '../../components/SocialAuth'

export default function SignUp () {
  const { signIn } = useAuth()
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      email: 'admin@evnext.com',
      password: '123456'
    },
    validationSchema: signUpSchema,
    onSubmit: () => {
      signIn()
      history.push('/dashboard')
    }
  })

  return (
    <>
      <AuthWrap title='Sign Up'>
        <form onSubmit={formik.handleSubmit}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent='space-between'
            spacing={1}
            sx={{
              mb: 2
            }}
          >
            <Box>
              <Box fontWeight={600} fontSize={15} mb={0.5}>First Name</Box>
              <TextField
                id='outlined-fn-input'
                type='email'
                name='email'
                autoComplete='email'
                variant='outlined'
                size='small'
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Box>
            <Box>
              <Box fontWeight={600} fontSize={15} mb={0.5}>Last Name</Box>
              <TextField
                id='outlined-ln-input'
                name='firstName'
                variant='outlined'
                size='small'
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Box>
          </Stack>
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
            </Stack>
            <TextField
              id='outlined-password-input'
              placeholder='Password'
              type='password'
              variant='outlined'
              size='small'
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <Button
              sx={{ fontSize: 15 }}
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
            >Create Account
            </Button>
          </Box>
          <SocialAuth />
        </form>
      </AuthWrap>
    </>
  )
}

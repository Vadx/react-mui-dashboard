import * as yup from 'yup'

const passwordRegExp = /^[A-Za-z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/i
const nameRegExp = /^[A-Za-z0-9_ ]+$/

export const loginSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required')
})

export const signUpSchema = yup.object({
  firstName: yup.string()
    .required('First Name is required')
    .trim('Please use only alphanumeric characters')
    .min(3, 'First Name must be at least 3 characters')
    .matches(nameRegExp, { message: 'Please use only alphanumeric characters' }),
  lastName: yup.string()
    .required('Last Name is required')
    .trim('Please use only alphanumeric characters')
    .min(3, 'Last Name must be at least 3 characters')
    .matches(nameRegExp, { message: 'Please use only alphanumeric characters' }),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().matches(passwordRegExp, { message: 'Please use only alphanumeric characters' })
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
})

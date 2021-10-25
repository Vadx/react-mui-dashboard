import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from './providers/auth'

import Home from './pages/Home'

// Auth
import Login from './pages/Authorization/Login.js'
import SignUp from './pages/Authorization/SignUp.js'
import ForgotPassword from './pages/Authorization/ForgotPassword.js'
import ResetPassword from './pages/Authorization/ResetPassword'

// Dashboard pages
import Dashboard from './pages/Dashboard'
import Notifications from './pages/Notifications'
import Sessions from './pages/Sessions'
import Products from './pages/Products'

// route config
export const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    isAuthorisation: true
  },
  {
    path: '/signup',
    component: SignUp,
    isAuthorisation: true
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    isAuthorisation: true
  },
  {
    path: '/reset-password',
    component: ResetPassword,
    isAuthorisation: true
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/notifications',
    component: Notifications
  },
  {
    path: '/sessions',
    component: Sessions
  },
  {
    path: '/products',
    component: Products
  }
]

export function RouteWithSubRoutes (route) {
  const { isAuthenticated } = useAuth()
  return (
    <Route
      path={route.path}
      render={props => {
        if (!isAuthenticated && !!route.isAuthorisation) {
          return <route.component {...props} />
        }

        if (!isAuthenticated && !route.isAuthorisation) {
          return <Redirect to='/login' />
        }

        if (isAuthenticated && !route.isAuthorisation) {
          return <route.component {...props} />
        } else {
          return <Redirect to='/dashboard' />
        }
      }}
    />
  )
}

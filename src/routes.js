import React from 'react'
import { Route } from 'react-router-dom'

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
    component: Login
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/forgot-password',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    component: ResetPassword
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
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

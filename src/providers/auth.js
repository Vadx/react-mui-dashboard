import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const signIn = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(!isAuthenticated)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

import React, { createContext, useContext, useMemo, useState } from "react"

const AUTH_STORAGE_KEY = "auth_user"

const AuthContext = createContext(null)

const readStoredAuth = () => {
  if (typeof window === "undefined") {
    return { isLoggedIn: false, username: "", userImage: null }
  }

  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY)
    if (!raw) {
      return { isLoggedIn: false, username: "", userImage: null }
    }

    const parsed = JSON.parse(raw)
    return {
      isLoggedIn: Boolean(parsed?.isLoggedIn),
      username: parsed?.username || "",
      userImage: parsed?.userImage || null,
    }
  } catch {
    return { isLoggedIn: false, username: "", userImage: null }
  }
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(readStoredAuth)

  const login = ({ username, userImage }) => {
    const nextAuth = {
      isLoggedIn: true,
      username,
      userImage: userImage || null,
    }

    setAuth(nextAuth)
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuth))
  }

  const logout = () => {
    const clearedAuth = { isLoggedIn: false, username: "", userImage: null }
    setAuth(clearedAuth)
    window.localStorage.removeItem(AUTH_STORAGE_KEY)
  }

  const value = useMemo(
    () => ({
      ...auth,
      login,
      logout,
    }),
    [auth],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}

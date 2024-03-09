import { verifyToken } from "@/helpers/auth"
import { createContext, useEffect, useState } from "react"

type AuthContextProps = {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const loggedIn = verifyToken()
    setIsLoggedIn(loggedIn)
  }, [])

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

import { createContext, useContext, useEffect, useMemo, useState } from "react"

// Simple client-side auth holder. In a real app, replace with API-backed auth.
const AuthContext = createContext(undefined)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("authUser")
    return stored ? JSON.parse(stored) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user))
    } else {
      localStorage.removeItem("authUser")
    }
  }, [user])

  const login = async ({ name, email, avatarUrl }) => {
    // Replace this stub with real authentication when backend is ready.
    const derivedName = name || email?.split("@")?.[0] || "User"
    setUser({
      name: derivedName,
      email,
      avatarUrl: avatarUrl || null,
    })
  }

  const logout = () => setUser(null)

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}

export default AuthProvider








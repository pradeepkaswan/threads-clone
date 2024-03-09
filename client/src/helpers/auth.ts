export const verifyToken = (): boolean => {
  const token = localStorage.getItem("authToken")
  return !!token
}

export const withAuth = () => {}

export const generateAccessToken = () => {}

export const generateRefreshToken = () => {}

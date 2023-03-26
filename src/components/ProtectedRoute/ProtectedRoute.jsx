import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ loggedIn, children }) {
  return !loggedIn ? <Navigate to='/' replace /> : children
}

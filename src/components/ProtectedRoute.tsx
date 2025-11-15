import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children, role }: { children: JSX.Element, role: string }) {
  const bruker = JSON.parse(localStorage.getItem("bruker") || "{}")
  if (!bruker || bruker.role !== role) {
    return <Navigate to="/login" replace />
  }
  return children
}

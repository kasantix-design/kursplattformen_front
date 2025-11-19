import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  role: "admin" | "medlem";
}

export default function ProtectedRoute({ children, role }: Props) {
  const brukerRaw = localStorage.getItem("bruker");

  // Hvis ikke logget inn – redirect
  if (!brukerRaw) {
    return <Navigate to="/login" replace />;
  }

  let bruker;

  try {
    bruker = JSON.parse(brukerRaw);
  } catch (error) {
    console.error("❌ Klarte ikke å parse 'bruker' fra localStorage:", error);
    return <Navigate to="/login" replace />;
  }

  // Hvis feil rolle – redirect
  if (!bruker?.role || bruker.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

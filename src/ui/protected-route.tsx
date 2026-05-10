// src/components/ProtectedRoute.tsx
import { Navigate, Outlet, useLocation } from "react-router";
import { authClient } from "../lib/auth-client";

export function ProtectedRoute() {
  const { data: session, isPending } = authClient.useSession();
  const location = useLocation(); // 👈 Capture where the user was trying to go

  if (isPending) return <div>Loading session...</div>;
  
  if (!session) {
    // Pass the current route object inside the history state wrapper
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

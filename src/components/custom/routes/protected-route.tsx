// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {useAuth} from "@/contexts/AuthContext.tsx";

interface ProtectedRouteProps {
    allowedRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
    const { user } = useAuth();
    const location = useLocation();

    // If the route is protected and either there is no user or the user does not have any of the allowed roles,
    // then redirect to the Unauthorized page.
    if (!user || (allowedRoles && !allowedRoles.some(role => user.roles.includes(role)))) {
	  return <Navigate to="/unauthorized" replace state={{ from: location }} />;
    }

    return <Outlet />;
};

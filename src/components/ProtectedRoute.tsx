import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAllowed,
  children,
}) => !isAllowed ? <Navigate to={'/login'} /> : children;

export default ProtectedRoute;

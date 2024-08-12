import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return element;
};

export default ProtectedRoute;
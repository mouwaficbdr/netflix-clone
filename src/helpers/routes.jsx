/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (!user) {
    return children; // Si l'utilisateur n'est pas connecté, affichez les enfants
  }

  return <Navigate to={loggedInPath} />; // Redirection si connecté
}

export function ProtectedRoute({ user, children }) {
  if (user) {
    return children; // Si l'utilisateur est connecté, affichez les enfants
  }

  return <Navigate to="/signin" />; // Redirection si non connecté
}

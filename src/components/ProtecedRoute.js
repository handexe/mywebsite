import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

function ProtectedRoute({ children, userEmail, allowedEmail }) {
  if (userEmail !== allowedEmail) {
    // Eğer kullanıcı yetkili değilse, giriş sayfasına yönlendirin
    return <Navigate to="/login" />;
  }
  // Eğer kullanıcı yetkiliyse, bileşeni render et
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  userEmail: PropTypes.string.isRequired,
  allowedEmail: PropTypes.string.isRequired,
};

export default ProtectedRoute;

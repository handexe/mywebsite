import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

ProtectedRoute.propTypes = {
  chlidren: PropTypes.string.isRequired, // veya uygun tip
  userEmail: PropTypes.string.isRequired,
  allowedEmail: PropTypes.string.isRequired,
};
function ProtectedRoute({ children, userEmail, allowedEmail }) {
  if (userEmail !== allowedEmail) {
    // Eğer kullanıcı yetkili değilse, giriş sayfasına yönlendirin
    return <Navigate to="/login" />;
  }
  // Eğer kullanıcı yetkiliyse, bileşeni render et
  return children;
}


export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, userEmail}) {
  if (userEmail !== process.env.REACT_APP_ADMIN_EMAIL) {
    // Eğer kullanıcı yetkili değilse, giriş sayfasına yönlendirin
    return <Navigate to="/login" />;
  }
  // Eğer kullanıcı yetkiliyse, bileşeni render et
  return children;
}

export default ProtectedRoute;

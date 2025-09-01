import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const API_URL = import.meta.env.VITE_BASE_URL;
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role);
        localStorage.setItem("role", decoded.role);
      } catch (e) {
        console.error("Invalid token", e);
        logout();
      }
    }
  }, [token]);

  const login = (accessToken, userData) => {
    localStorage.setItem("access_token", accessToken);
    setToken(accessToken);
    setUser(userData);

    try {
      const decoded = jwtDecode(accessToken);
      setUserRole(decoded.role);
      localStorage.setItem("role", decoded.role);
    } catch (e) {
      console.error("Failed to decode token", e);
    }
  };

const logout = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (token) {
      await fetch(`${API_URL}/logout`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
    }
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    setToken(null);
    setUser(null);
    setUserRole(null);
  }
};
  return (
    <AuthContext.Provider value={{ token, user, login, logout, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(
    localStorage.getItem("auth") === "true" ? true : false
  );

  const [token, setToken] = useState(Cookies.get("accessToken") || "");

  return (
    <AuthContext.Provider value={{ auth, setAuth, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

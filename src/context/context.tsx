import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";

interface AuthContextType {
  isAuthenticate: boolean;
  login: (token: string) => void;
  loginWithGoogle: () => void;
  logout: () => void;
  username: string
  idUsername: number
  
}

interface DecodedToken {
  exp: number;
  id: number;
  email: string;
  senha: string;
  nome: string 
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [username, setUsername] = useState('')
  const [idUsername, setIdUsername] = useState(0)
  const navigate = useNavigate();

  const login = (token: string) => {
    localStorage.setItem("Authtoken", token);
    setIsAuthenticate(true);
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      localStorage.setItem("GoogleToken", tokenResponse.access_token);
      navigate("/");
      setIsAuthenticate(true);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  const logout = () => {
    localStorage.removeItem("Authtoken");
    localStorage.removeItem("GoogleToken");
    setIsAuthenticate(false);
    navigate("/");
  };

  useEffect(() => {
    const tokenJWT = localStorage.getItem("Authtoken");
    const tokenGoogle = localStorage.getItem("GoogleToken");

    if (tokenJWT) {
      try {
        const tokenDecoded: DecodedToken = jwtDecode(tokenJWT);
        const username = tokenDecoded.nome
        const idUsername = tokenDecoded.id
        setUsername(username)
        setIdUsername(idUsername)
        const time = Date.now() / 1000;
        if (tokenDecoded.exp < time) {
          setIsAuthenticate(false);
        } else {
          setIsAuthenticate(true);
        }
      } catch (err) {
        console.log("Erro ao decodificar o JWT:", err);
        setIsAuthenticate(false);
      }
    } else if (tokenGoogle) {
      setIsAuthenticate(true);
    } else {
      setIsAuthenticate(false);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        idUsername,
        isAuthenticate,
        login,
        logout,
        loginWithGoogle,
        username
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User, users } from "../mocks/loginUserData";

interface AuthContextType {
  isLoggedIn: boolean | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  user: { username: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("user");
    if (loggedIn === "true" && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    console.log("Login called with", username, password);

    if (!username || !password) {
      setError("Please enter your username and password.");
      return false;
    }

    try {
      const foundUser = users.find(
        (currentUser: User) =>
          currentUser.username === username && currentUser.password === password
      );

      if (foundUser) {
        const userData = { username };
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(userData));

        setIsLoggedIn(true);
        setUser({ username });
        setError(null);
        return true;
      } else {
        setError("Username or password is incorrect.");
        return false;
      }
    } catch (error) {
      setError("Login failed. Please try again.");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, error, setError, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

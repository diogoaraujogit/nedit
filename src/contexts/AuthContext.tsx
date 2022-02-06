import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import useIntl from '../hooks/useIntl';
import usePersistedState from '../hooks/usePersistantState';
import api from '../services/api';

interface AuthProps {
  username?: string;
  token: string;
}

interface AuthContextProps extends AuthProps {
  login(payload: AuthProps): void;
  logout: () => void;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  checkToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [username, setUser] = usePersistedState<string | undefined>(
    '@nedit/user',
    '',
  );
  const [token, setToken] = usePersistedState<string>('@nedit/token', '');
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const intl = useIntl();

  const checkToken = async () => {
    setIsAuthenticating(true);

    try {
      const response = await api.post(`/auth/check-token`, { token });

      if (response?.data?.isValid) {
        setIsAuthenticated(true);
      } else {
        const error = intl.authError;
        toast.error(error);
        setIsAuthenticated(false);
      }
    } catch (e) {
      const error = intl.authError;
      toast.error(error);
      setIsAuthenticated(false);
    }

    setIsAuthenticating(false);
  };

  const login = (payload: AuthProps) => {
    setUser(payload.username);
    setToken(payload.token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser('');
    setToken('');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        token,
        login,
        logout,
        isAuthenticated,
        isAuthenticating,
        checkToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

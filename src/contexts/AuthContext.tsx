import React, { createContext } from 'react';
import useAuth from './hooks/useAuth';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

interface User {
  id: string;
  name: string;
  role: string;
}

interface ContextData {
  currentUser: User;
  authenticated: boolean;
  handleLogin(token: string, user: User): void;
  handleLogout(): void;
}

const Context = createContext<ContextData>({} as ContextData);

function AuthProvider({ children }: Props) {
  const { authenticated, currentUser, handleLogin, handleLogout } = useAuth();

  return (
    <Context.Provider
      value={{ currentUser, authenticated, handleLogin, handleLogout }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };

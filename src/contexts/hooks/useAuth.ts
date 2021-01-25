import { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  role: string;
}

export default function useAuth() {
  const token = localStorage.getItem('token');
  const [authenticated, setAuthenticated] = useState(!!token);
  const [currentUser, setCurrentUser] = useState({} as User);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user && token) {
      setCurrentUser(JSON.parse(user));
      return;
    }

    handleLogout();
  }, [authenticated, token]);

  function handleLogin(token: string, currentUser: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    setAuthenticated(true);
    setCurrentUser(currentUser);
  }

  function handleLogout() {
    setAuthenticated(false);
    setCurrentUser({} as User);

    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  return { authenticated, currentUser, handleLogin, handleLogout };
}

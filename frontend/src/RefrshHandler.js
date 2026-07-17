import { useEffect } from 'react';

function RefreshHandler({ setIsAuthenticated }) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const isLoggedIn = Boolean(token);
    const currentPath = window.location.pathname;

    setIsAuthenticated(isLoggedIn);

    if (!isLoggedIn && currentPath !== '/login' && currentPath !== '/signup') {
      window.location.replace('/login');
    }
  }, [setIsAuthenticated]);

  return null;
}

export default RefreshHandler;

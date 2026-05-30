import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Usuario por defecto para acelerar la demo ante el jurado
    setUser({ id: 'uuid-1', name: 'Empresa Demo SCZ', role: 'generator' });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
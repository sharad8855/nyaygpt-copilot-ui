
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'advocate' | 'student' | 'citizen' | 'ias_aspirant';
  plan: 'free' | 'premium' | 'enterprise';
  isVerified?: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string, role: User['role']) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication - replace with real auth service
  useEffect(() => {
    const savedUser = localStorage.getItem('nyaygpt_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // Mock login - replace with real authentication
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: 'advocate',
      plan: 'free',
      isVerified: false
    };
    setUser(mockUser);
    localStorage.setItem('nyaygpt_user', JSON.stringify(mockUser));
    setLoading(false);
  };

  const signup = async (email: string, password: string, name: string, role: User['role']) => {
    setLoading(true);
    // Mock signup - replace with real authentication
    const mockUser: User = {
      id: '1',
      email,
      name,
      role,
      plan: 'free',
      isVerified: false
    };
    setUser(mockUser);
    localStorage.setItem('nyaygpt_user', JSON.stringify(mockUser));
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nyaygpt_user');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    signup,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

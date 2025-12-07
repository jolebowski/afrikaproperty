import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { AGENCIES } from '../data/agencies';
import type { Agency, User } from '../types';

interface AuthContextType {
  user: User | null;
  agency: Agency | null;
  isAuthenticated: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
  signup: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [agency, setAgency] = useState<Agency | null>(null);

  // Mock initial login check (optional)
  useEffect(() => {
    // Check localStorage or similar in real app
  }, []);

  const login = async (email: string) => {
    // Mock login logic
    console.log('Logging in as', email);
    
    // For demo purposes, if email contains "horizon", log in as Horizon Immobilier
    // Otherwise pick a random agency or the first one
    let targetAgency = AGENCIES.find(a => a.email === email);
    
    if (!targetAgency) {
        // Fallback for demo: just pick the first one if email is valid
        targetAgency = AGENCIES[0];
    }

    const mockUser: User = {
      id: 'usr_1',
      agencyId: targetAgency.id,
      email: email,
      firstName: 'John',
      lastName: 'Doe',
      role: 'owner',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    };

    setUser(mockUser);
    setAgency(targetAgency);
  };

  const logout = () => {
    setUser(null);
    setAgency(null);
  };

  const signup = async (data: any) => {
    console.log('Signup data:', data);
    // Mock signup logic
    // In a real app, this would create the agency and user in the backend
    
    const newAgency: Agency = {
      id: `ag_${Date.now()}`,
      name: data.agencyName,
      email: data.email,
      phone: data.phone,
      address: data.agencyAddress,
      description: data.agencyDescription,
      website: data.website,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newUser: User = {
      id: `usr_${Date.now()}`,
      agencyId: newAgency.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: 'owner',
    };

    setUser(newUser);
    setAgency(newAgency);
  };

  return (
    <AuthContext.Provider value={{ user, agency, isAuthenticated: !!user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

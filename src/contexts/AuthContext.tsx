// src/context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

export type User = {
    id: string;
    name: string;
    roles: string[];
};

export type LoginCredentials = {
    email: string;
    password: string;
};

interface AuthContextType {
    user: User | null;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (credentials: LoginCredentials) => {
	  // TODO: Replace this mock call with a real API call to your NestJS backend.
	  // For example, use fetch/axios to send { email, password } and then store the user data.
	  console.log('Logging in with:', credentials);
	  setUser({
		id: '1',
		name: 'John Doe',
		roles: ['user', 'admin'], // you could have roles such as 'admin' here too
	  });
    };

    const logout = () => {
	  setUser(null);
    };

    const isAuthenticated = !!user;

    return (
	    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
		  {children}
	    </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
	  throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

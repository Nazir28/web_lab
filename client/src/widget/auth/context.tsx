'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
    id: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // При монтировании проверяем, есть ли пользователь в localStorage или cookies
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (user: User) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuthContext must be used within AuthProvider');
    return context;
};

export const useAuth = () => {
    const { user, login, logout } = useAuthContext();

    return {
        isAuthenticated: !!user,
        user,
        login,
        logout,
    };
};

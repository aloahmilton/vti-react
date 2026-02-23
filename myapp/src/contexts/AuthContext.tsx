import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
    name: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    // Restore session from localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('am_user');
        if (savedUser) setUser(JSON.parse(savedUser));
    }, []);

    const login = async (email: string, _password: string): Promise<boolean> => {
        // --- Replace this with a real API call ---
        // For now, any non-empty email/password logs in
        if (!email || !_password) return false;
        const u: User = { name: email.split('@')[0], email };
        setUser(u);
        localStorage.setItem('am_user', JSON.stringify(u));
        return true;
    };

    const register = async (name: string, email: string, _password: string): Promise<boolean> => {
        if (!name || !email || !_password) return false;
        const u: User = { name, email };
        setUser(u);
        localStorage.setItem('am_user', JSON.stringify(u));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('am_user');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}

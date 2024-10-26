import React, { createContext, useContext, useState } from 'react';
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    let parsedUser = null;

    try {
        const initialAuthUser = localStorage.getItem("Users");
        // Check if initialAuthUser is valid JSON and not undefined or null
        parsedUser = initialAuthUser && initialAuthUser !== "undefined" ? JSON.parse(initialAuthUser) : null;
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        parsedUser = null;
    }

    const [authuser, setauthuser] = useState(parsedUser);

    return (
        <AuthContext.Provider value={[authuser, setauthuser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

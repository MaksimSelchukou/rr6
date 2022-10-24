import React, {createContext, useState} from 'react';

export const AuthContext = createContext<any>(null)

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null)
    const signIn = (newUser: any, cb: any) => {
        setUser(newUser)
        cb()
    }
    const signOut = (cb: any) => {
        setUser(null)
        cb()
    }
    const value = {user, signIn, signOut}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


import React, {createContext, ReactNode, useState} from 'react';

export const AuthContext = createContext<any>(null)
AuthContext.displayName = 'MyDisplayName';
// console.log(AuthContext)

type AuthType = {
    children: ReactNode
}

export const AuthProvider = ({children}: AuthType) => {
    const [user, setUser] = useState<string | null>(null)
    const signIn = (newUser: string, cb: any) => {
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


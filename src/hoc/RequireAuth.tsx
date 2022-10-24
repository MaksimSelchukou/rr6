import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

export const RequireAuth = ({children}: any) => {
    let location = useLocation()
    const {user} = useAuth()
    if (!user) {
        return <Navigate to='/login' state={{from: location}}/>
    }
    return children
};


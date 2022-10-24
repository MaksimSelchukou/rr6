import React from 'react';
import {useAuth} from "../hooks/useAuth";
import {useNavigate} from "react-router-dom";

export const CreatePost = () => {
    const {signOut} = useAuth()
    const navigate = useNavigate()
    return (
        <>
            <h1>
                Create new Post
            </h1>
            <button onClick={() => signOut(() => navigate('/', {replace: true}))}>OUT</button>
        </>
    );
};

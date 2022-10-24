import React, {FormEvent} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

export const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signIn} = useAuth()

    const frommPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const form = event.target
        // console.log(form)
        const user = form.username.value
        signIn(user, () => navigate(frommPage, {replace: true}))
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    name:<input name='username'/>
                </label>
                <button type={"submit"}>Login</button>
            </form>
            {frommPage}
        </div>
    );
};


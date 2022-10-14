import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const switchLinkActive = (isActive: boolean) => {
    return (
        isActive ? 'active-link' : ''
    )
}

const Layout = () => {
    return (
        <>
            <header>
                <NavLink end className={({isActive}) => switchLinkActive(isActive)} to="/">Home</NavLink>
                <NavLink className={({isActive}) => switchLinkActive(isActive)} to="/posts">Blog</NavLink>
                <NavLink className={({isActive}) => switchLinkActive(isActive)} to="/about">About</NavLink>
            </header>
            <main className={'container'}>
                <Outlet/>
            </main>
            <footer className={'container'}>
                2022
            </footer>
        </>
    );
};

export default Layout;
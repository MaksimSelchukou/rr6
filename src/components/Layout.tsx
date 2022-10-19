import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {CustomLink} from "./CustomLink";

const switchLinkActive = (isActive: boolean) => {
    return (
        isActive ? 'active-link' : ''
    )
}



const obj = {
    name:'Max'
}

const Layout = () => {
    return (
        <>
            <header>
                {/*<NavLink end className={({isActive}) => switchLinkActive(isActive)} to="/">Home</NavLink>*/}
                {/*<NavLink className={({isActive}) => switchLinkActive(isActive)} to="/posts">Blog</NavLink>*/}
                {/*<NavLink className={({isActive}) => switchLinkActive(isActive)} to="/about">About</NavLink>*/}
                {/*<CustomLink to={'/'}>Home</CustomLink>*/}
                {/*<CustomLink to={'/posts'}>Blog</CustomLink>*/}
                {/*<CustomLink to={'/about'}>About</CustomLink>*/}
                <CustomLink to={'/'} {...obj}>Home</CustomLink>
                <CustomLink to={'/posts'}>Blog</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
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
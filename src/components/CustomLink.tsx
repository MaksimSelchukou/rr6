import React from 'react';
import {Link, useMatch} from "react-router-dom";

type CustomLinkPropsType = {
    children?: any
    to: string
    props?: any
}

export const CustomLink = ({children, to, ...props}: CustomLinkPropsType) => {
    const match = useMatch({
        path: to,
        end: to.length === 1
    })
    // console.log(match)
    //console.log({...props},'props')
    return (
        <>
            <Link
                to={to}
                style={{
                    color: match ? 'var(--color-active)' : 'white'
                }}
                {...props}
            >
                {children}
            </Link>
        </>
    );
};


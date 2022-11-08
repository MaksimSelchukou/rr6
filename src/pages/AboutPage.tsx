import React from 'react';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import BlogPage from "./BlogPage";

const AboutPage = () => {
    return (
        <div>
            <h1>AboutPage</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dolorem.</p>
            <ul>
                <li><Link to={'contacts'}>Contacts</Link></li>
                <li><Link to={'team'}>About Us </Link></li>
            </ul>
            {/*<Routes>*/}
            {/*    <Route path="contacts" element={<span>Contacts!</span>}/>*/}
            {/*    <Route path="team" element={<span>Team!</span>}/>*/}
            {/*</Routes>*/}
            <Outlet/>
        </div>
    );
};

export default AboutPage;
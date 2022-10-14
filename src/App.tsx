import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import {NotfoundPage} from "./pages/NotFoundPage";
import Layout from "./components/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="posts" element={<BlogPage/>}/>
                    <Route path="*" element={<NotfoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;

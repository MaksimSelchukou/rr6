import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import {NotfoundPage} from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import {SinglePage} from "./pages/SinglePage";
import {CreatePost} from "./pages/CreatePost";
import {EditPost} from "./pages/EditPost";
import {RequireAuth} from "./hoc/RequireAuth";
import {LoginPage} from "./pages/LoginPage";
import {AuthProvider} from "./hoc/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="about/*" element={<AboutPage/>}>
                        <Route path="contacts" element={<span>Contacts!</span>}/>
                        <Route path="team" element={<span>Team!</span>}/>
                    </Route>
                    {/*переадресация без записей в браузере*/}
                    <Route path="about-us" element={<Navigate to='about' replace/>}/>
                    <Route path="posts" element={<BlogPage/>}/>
                    <Route path="posts/:id" element={<SinglePage/>}/>
                    <Route path="posts/:id/edit" element={<EditPost/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path="posts/new" element={
                        <RequireAuth>
                            <CreatePost/>
                        </RequireAuth>}/>
                    <Route path="posts/new/edit" element={<NotfoundPage/>}/>
                    <Route path="*" element={<NotfoundPage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;

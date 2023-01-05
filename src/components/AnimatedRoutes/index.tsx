import React from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import About from '../../pages/About';
import Contact from '../../pages/Contact';

import {AnimatePresence} from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();
    
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route element={ <Home/> } path="/"/>
            <Route element={ <Projects/> } path="/projects"/>
            <Route element={<Contact/>} path="/contact"/>
            <Route element={<About/>} path="/about"/>
        </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
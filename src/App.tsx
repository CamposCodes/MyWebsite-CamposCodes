import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {

    return (
        <Router>
            {/* <Navbar/> */}
            <Routes>
                <Route element={ <Home/> } path="/"/>
                <Route element={ <Projects/> } path="/projects"/>
                <Route element={<Contact/>} path="/contact"/>
                <Route element={<About/>} path="/about"/>
            </Routes>
        </Router>
    );
}

export default App;

import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';


const App = () => {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route element={ <Home/> } path="/"/>
                <Route element={ <Projects/> } path="/projects"/>
                <Route path="/contact"/>
                <Route path="/about"/>
            </Routes>
        </Router>
    );
}

export default App;

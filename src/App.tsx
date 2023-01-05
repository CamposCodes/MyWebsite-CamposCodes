import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';


const App = () => {

    return (
        <Router>
            <AnimatedRoutes/>
        </Router>
    );
}

export default App;

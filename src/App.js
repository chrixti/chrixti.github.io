import React from 'react';
import './style/navibar.css';
import './style/footer.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Footer from './components/Footer';
import Resume from './pages/Resume';

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Resume' element={<Resume />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;




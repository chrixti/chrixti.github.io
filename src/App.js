import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { Home } from './components/Home';
import {Brands} from './components/Brands';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/home" element={<Home />} />
                <Route path="brands/*" element={<Brands />} />
            </Routes>
        </Router>
    );
}

export default App;

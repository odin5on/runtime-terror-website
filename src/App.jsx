import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your other pages and the Navbar
import Navbar from './components/navbar';
import HomePage from './homepage';
import Danny from './pages/danny';
import Jordin from './pages/jordin';
import Addie from './pages/addie';
import Nina from './pages/nina';

function App() {
  return (
    <Router basename='/runtime-terror-website'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Danny" element={<Danny />} />
        <Route path="/Jordin" element={<Jordin />} />
        <Route path="/Addie" element={<Addie />} />
        <Route path="/Nina" element={<Nina />} />
      </Routes>
    </Router>
  );
}

export default App;
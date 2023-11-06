import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your other pages and the Navbar
import Navbar from './components/navbar';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import HomePage from './homepage';

function App() {
  return (
    <Router basename='/runtime-terror-website'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
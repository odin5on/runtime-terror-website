import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Import your other pages
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={() => navigate('/page1')}>Go to Page 1</button>
      <button onClick={() => navigate('/page2')}>Go to Page 2</button>
    </div>
  );
}

export default function App() {
  return (
    <Router basename='/runtime-terror-website'>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
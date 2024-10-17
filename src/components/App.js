import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './about/AboutPage';
// eslint-disable-next-line import/no-unresolved
import HomePage from './Home/HomePage';

export default function App() {
    return (
      <div className="conatiner-fluid">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    );
}
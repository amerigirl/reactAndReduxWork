import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './about/AboutPage';
// eslint-disable-next-line import/no-unresolved
import HomePage from './Home/HomePage';
import Header from './common/Header';

export default function App() {
    return (
      <div className="conatiner-fluid">
        <Header />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    );
}
import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";



export default function App() {
  return (
    <div className="conatiner-fluid">
      <Header />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="courses" element={<CoursesPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

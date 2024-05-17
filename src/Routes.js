import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Location from './pages/Location';

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/location/:id" element={<Location />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRoutes;

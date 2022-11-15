import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import NavBar from './layout/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

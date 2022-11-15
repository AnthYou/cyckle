import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import NavBar from './layout/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <NavBar />
        <main className="container flex-1 mx-auto my-12 px-5 flex flex-col">
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;

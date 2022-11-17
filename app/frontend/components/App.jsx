import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';
import Footer from './layout/Footer';
import NavBar from './layout/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <NavBar />
          <main className="container flex-1 mx-auto my-12">
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;

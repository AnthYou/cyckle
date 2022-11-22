import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="container flex-1 mx-auto my-12">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

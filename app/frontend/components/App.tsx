import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { RootState } from "../store";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { checkAuth } from "../store/actions/auth";

const App = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {isAuthenticated && <p className="text-center">Logged in!</p>}
      <main className="container flex-1 mx-auto my-12">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={isAuthenticated ? <Navigate replace to="/" /> : <Login />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate replace to="/" /> : <Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

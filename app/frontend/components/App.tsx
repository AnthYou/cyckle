import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { RootState } from "../store";
import { checkAuth } from "../store/actions/auth";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import LoadingSpinner from "./UI/LoadingSpinner";

const Home = React.lazy(() => import("./pages/Home"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Login = React.lazy(() => import("./pages/Login"));
const AvailableBikes = React.lazy(() => import("./pages/AvailableBikes"));

const App = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const currentUser = useAppSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {isAuthenticated && <p className="text-center">Hello {currentUser?.firstName}!</p>}
      <main className="container flex-1 mx-auto my-12">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/bikes" element={<AvailableBikes />} />
            <Route path="/login" element={isAuthenticated ? <Navigate replace to="/" /> : <Login />} />
            <Route path="/signup" element={isAuthenticated ? <Navigate replace to="/" /> : <Signup />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;

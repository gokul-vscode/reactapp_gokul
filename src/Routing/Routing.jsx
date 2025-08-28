import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import ViewProduct from "../components/Home/ViewProduct/ViewProduct";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewproduct/:id" element={<ViewProduct/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;

import React from "react";
import Redux from "./pages/redux";
import Home from "./pages/home";
import Test from "./pages/test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redux />} />

        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

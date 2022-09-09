import React from "react";
import Home from "./pages/home";
import Temp from "./pages/temp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/temp" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

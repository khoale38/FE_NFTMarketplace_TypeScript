import React from "react";
import Redux from "./pages/redux";
import Home from "./pages/Home/homePage";
import CollectionPage from "./pages/Collection/collectionPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redux />} />

        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

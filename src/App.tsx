import React from "react";
import Redux from "./pages/redux";
import Home from "./pages/Home/homePage";
import CollectionPage from "./pages/Collection/collectionPage";
import MintPage from "pages/Mint/mintPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PersonalPage from "pages/Personal/personalPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redux />} />

        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/mint" element={<MintPage />} />
        <Route path="/personal" element={<PersonalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

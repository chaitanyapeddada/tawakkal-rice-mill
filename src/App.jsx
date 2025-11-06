import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import BranchList from "./components/BranchList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route index element={<Gallery />} />
          <Route path="branches" element={<BranchList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

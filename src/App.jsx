import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // <-- ensure this matches src/components/NavBar.jsx
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import BranchList from "./components/BranchList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="services" element={<Gallery />} />
          <Route path="branches" element={<BranchList />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

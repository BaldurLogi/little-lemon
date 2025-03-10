import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import HomePage from "./components/HomePage";
import Footer from "./Footer";
import Main from "./Main";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<Main />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

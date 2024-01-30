import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Blogpage from "./Pages/Blogpage.js";
import Goalpage from "./Pages/Goalpage.js";
import Product from "./Pages/Productpage.js";
import OurPledge from "./Pages/OurPledge.js";
import Footer from "./components/Layout/Footer.js";
import Navbar from "./components/Layout/Navbar.js";
import Contact from "./Pages/Contact.js";
import ScrollBtn from "./components/ScrollBtn.jsx";
import Blogdetails from "./components/Blogs/Blogdetails.js";

function App() {



  return (
    <>

        <Router>
          {/* <ScrollToTop /> */}
          <Navbar />
          <ScrollBtn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-pledge" element={<OurPledge />} />
            <Route path="/blog" element={<Blogpage />} />
            <Route path="/Goalpage" element={<Goalpage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs/:slug" element={<Blogdetails />} />
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;

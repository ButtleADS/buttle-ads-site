// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Header } from "./components/Header/Header";
import "./index.css";

import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Advertisers } from "./pages/Advertisers";
import { QRLandings } from "./pages/QRLandings";
import { Contact } from "./pages/Contact";
// import { HeaderHomePage } from "./components/HeaderHomePage/HeaderHomePage";

function App() {
  // const [count, setCount] = useState(0)
  // const location = useLocation();
  // const isHomePage = location.pathname === "/Home";

  return (
    <>
      {/* {isHomePage ? <HeaderHomePage /> : <Header />} */}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Advertisers" element={<Advertisers />} />
        <Route path="/QRLandings" element={<QRLandings />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

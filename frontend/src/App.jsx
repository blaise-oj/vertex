import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Pages (folder-based structure)
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import RefineryPage from "./Pages/RefineryPage/RefineryPage";
import ConsultancyPage from "./Pages/ConsultancyPage/ConsultancyPage";
import NewsPage from "./Pages/NewsPage/NewsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import WhatsAppWidget from "./Components/WhatsAppWidget/WhatsAppWidget";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/refinery" element={<RefineryPage />} />
        <Route path="/consultancy" element={<ConsultancyPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsAppWidget />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
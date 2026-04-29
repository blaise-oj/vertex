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
import NewsArticle from "./Pages/NewsArticle/NewsArticle";
import ContactPage from "./Pages/ContactPage/ContactPage";
import WhatsAppWidget from "./Components/WhatsAppWidget/WhatsAppWidget";
import ScrollRestoration from "./Components/ScrollRestoration/ScrollRestoration";

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
        <Route path="/news/:id" element={<NewsArticle />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsAppWidget />
      <Footer />
      <ScrollRestoration />
    </BrowserRouter>
  );
};

export default App;
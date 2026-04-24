import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

const Footer = () => {

  const phone = "254 113 410633";

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-col">
          <h3>Vertex Smelting Company</h3>
          <p>
            A leading precious metals refinery in Kenya specializing in gold,
            silver, and platinum group metals. We deliver secure, transparent,
            and globally compliant refining solutions.
          </p>

          {/* SOCIALS */}
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>

            <a
              href={`https://wa.me/${phone}?text=Hello%20Vertex%20Smelting,%20I%20would%20like%20to%20enquire`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/refinery">Refinery</Link></li>
            <li><Link to="/consultancy">Consultancy</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/refinery">Gold Refining</Link></li>
            <li><Link to="/consultancy">Consultancy</Link></li>
            <li><Link to="/refinery">Assaying & Verification</Link></li>
            <li><Link to="/refinery">Secure Logistics</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>

          <p>
            <FaMapMarkerAlt /> Nairobi, Kenya
          </p>

          <p>
            <FaPhone />
            <a href="tel:+254 113 410633"> +254 113 410633</a>
          </p>

          <p>
            <FaEnvelope />
            <a href="mailto:info@vertexsmelting.com">
              info@vertexsmelting.com
            </a>
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Vertex Smelting Company. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
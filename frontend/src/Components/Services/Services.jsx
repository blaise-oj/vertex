import React from "react";
import "./Services.css";

// Images (replace with your real assets)
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

const Services = () => {
  return (
    <section className="services">

      <div className="services-header">
        <h2>Our Core Services</h2>
        <p>
          Delivering trusted, transparent, and innovative precious metals solutions.
        </p>
      </div>

      <div className="services-grid">

        {/* 1 */}
        <div className="service-card">
          <img src={hero1} alt="Ore Testing" />
          <h3>Free Ore Testing</h3>
          <p>
            Advanced XRF technology for fast and accurate mineral analysis.
          </p>
          <ul>
            <li>Free, fast & reliable results</li>
            <li>Support for licensing</li>
            <li>Ideal for small-scale miners</li>
          </ul>
        </div>

        {/* 2 */}
        <div className="service-card">
          <img src={hero2} alt="Refinery" />
          <h3>Gold Assaying & Refining</h3>
          <p>
            Professional refining and verification for global market standards.
          </p>
          <ul>
            <li>Gold Assaying</li>
            <li>Verification</li>
            <li>Processing & Laser Marking</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="service-card">
          <img src={hero3} alt="Ethical Mining" />
          <h3>Ethical & Sustainable Mining</h3>
          <p>
            Supporting artisanal miners through our AgriMining program.
          </p>
          <ul>
            <li>Eco-friendly solutions</li>
            <li>Community empowerment</li>
            <li>Sustainable production</li>
          </ul>
        </div>

        {/* 4 */}
        <div className="service-card highlight">
          <img src={hero4} alt="Technology" />
          <h3>Advanced Exploration Technology</h3>
          <p>
            Satellite imaging and nano-mapping for precise gold detection.
          </p>
          <ul>
            <li>Accurate deposit detection</li>
            <li>Reduced exploration risk</li>
            <li>High efficiency</li>
          </ul>
        </div>

      </div>

      <div className="services-cta">
        <button>Learn More</button>
      </div>

    </section>
  );
};

export default Services;
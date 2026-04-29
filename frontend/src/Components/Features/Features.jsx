import React from "react";
import "./Features.css";

// Images (use real industrial ones later)
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import ref6 from "../../assets/ref6.jpg";
import ref8 from "../../assets/ref8.jpg";
import ref9 from "../../assets/ref9.jpg";

const Features = () => {
  return (
    <section className="features">

      {/* HEADER */}
      <div className="features-header">
        <h2>Kenya’s Leading Precious Metals Refinery</h2>
        <p>
          Kenya’s trusted leader in gold and silver refining and ethical mining.
        </p>
      </div>

      {/* CONTENT */}
      <div className="features-content">

        {/* LEFT TEXT */}
        <div className="features-text">
          <h3>Expert Refining & Consultancy</h3>

          <p>
            Vertex Smelting Company is a premier precious metals refinery based
            in Nairobi, specializing in gold, silver, and platinum group metals.
          </p>

          <p>
            We provide assaying, verification, laser marking, bonded warehousing,
            and secure logistics.
          </p>

          <p>
            Our consultancy ensures full KYC & AML compliance, delivering safe,
            transparent, and verified transactions.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="features-cards">

          <div className="feature-card">
            <img src={ref8} alt="Consultancy" />
            <h4>Consultancy</h4>
            <p>
              Navigate complex gold transactions with clarity, compliance,
              and confidence.
            </p>
          </div>

          <div className="feature-card">
            <img src={ref6} alt="Logistics" />
            <h4>Secure Logistics</h4>
            <p>
              Licensed bonded warehousing with secure handling and
              global distribution.
            </p>
          </div>

          <div className="feature-card highlight">
            <img src={ref9} alt="Global Network" />
            <h4>Global Reach</h4>
            <p>
              Serving investors, banks, and industries worldwide with trusted supply chains.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="features-cta">
        <button>Book a Consultation</button>
      </div>

    </section>
  );
};

export default Features;
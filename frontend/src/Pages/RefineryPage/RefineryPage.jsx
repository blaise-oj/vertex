import React from "react";
import "./RefineryPage.css";

import ref1 from "../../assets/ref1.jpg";
import ref2 from "../../assets/ref2.jpg";
import ref3 from "../../assets/ref3.jpg";
import ref4 from "../../assets/ref4.jpg";
import ref5 from "../../assets/ref5.jpg";
import ref6 from "../../assets/ref6.jpg";
import ref7 from "../../assets/ref7.jpg";

const RefineryPage = () => {
  return (
    <div className="refinery-page">

      {/* HERO */}
      <section className="refinery-hero">
        <div className="overlay">
          <h1>Refining Excellence. Securing Trust. Empowering Trade.</h1>
          <p>
            We deliver refining, assaying, verification, secure storage and logistics
            for gold, silver and platinum group metals worldwide.
          </p>
        </div>
      </section>

      {/* SECTION TEMPLATE */}

      {/* 1 */}
      <section className="ref-section">
        <div className="ref-image">
          <img src={ref1} alt="" />
        </div>
        <div className="ref-text">
          <h2>Gold, Silver & PGM Refining</h2>
          <p>
            High-purity refining using modern and environmentally responsible methods.
          </p>
          <ul>
            <li>Gold refined up to 99.99%</li>
            <li>Silver refining</li>
            <li>Mercury-free process</li>
            <li>Full transparency & safe handling</li>
          </ul>
        </div>
      </section>

      {/* 2 */}
      <section className="ref-section reverse">
        <div className="ref-image">
          <img src={ref2} alt="" />
        </div>
        <div className="ref-text">
          <h2>Precious Metal Assaying</h2>
          <p>
            Advanced XRF testing ensures accurate composition and valuation.
          </p>
          <ul>
            <li>Fast turnaround</li>
            <li>Precise results</li>
            <li>Transparent reporting</li>
          </ul>
        </div>
      </section>

      {/* 3 */}
      <section className="ref-section">
        <div className="ref-image">
          <img src={ref3} alt="" />
        </div>
        <div className="ref-text">
          <h2>Verification & Authentication</h2>
          <p>
            We validate gold authenticity and documentation before transactions.
          </p>
          <ul>
            <li>KYC & AML screening</li>
            <li>Source verification</li>
            <li>Risk reduction</li>
          </ul>
        </div>
      </section>

      {/* 4 */}
      <section className="ref-section reverse">
        <div className="ref-image">
          <img src={ref4} alt="" />
        </div>
        <div className="ref-text">
          <h2>Jewelry & Scrap Recycling</h2>
          <p>
            Recover value from scrap metals and old jewelry efficiently.
          </p>
          <ul>
            <li>Eco-friendly refining</li>
            <li>Fair pricing</li>
            <li>Flexible payout options</li>
          </ul>
        </div>
      </section>

      {/* 5 */}
      <section className="ref-section">
        <div className="ref-image">
          <img src={ref5} alt="" />
        </div>
        <div className="ref-text">
          <h2>Laser Marking & Branding</h2>
          <p>
            Ensure traceability with professional engraving services.
          </p>
          <ul>
            <li>Custom logos</li>
            <li>Batch tracking</li>
            <li>Export-ready standards</li>
          </ul>
        </div>
      </section>

      {/* 6 */}
      <section className="ref-section reverse">
        <div className="ref-image">
          <img src={ref6} alt="" />
        </div>
        <div className="ref-text">
          <h2>Bonded Storage</h2>
          <p>
            Secure storage solutions in a fully monitored facility.
          </p>
          <ul>
            <li>24/7 surveillance</li>
            <li>Chain-of-custody tracking</li>
            <li>Customs-approved storage</li>
          </ul>
        </div>
      </section>

      {/* 7 */}
      <section className="ref-section">
        <div className="ref-image">
          <img src={ref7} alt="" />
        </div>
        <div className="ref-text">
          <h2>Secure Logistics</h2>
          <p>
            Reliable transportation for precious metals locally and globally.
          </p>
          <ul>
            <li>International shipping</li>
            <li>Customs clearance</li>
            <li>Real-time tracking</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="refinery-cta">
        <h2>Start Your Refining Process</h2>
        <p>Call us today to evaluate your materials.</p>
        <a href="tel:+254113410633">
          <button>Call +254 113 410 633</button>
        </a>
      </section>

    </div>
  );
};

export default RefineryPage;
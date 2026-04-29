import React from "react";
import "./AboutPage.css";

import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import news1 from "../../assets/news1.jpg";

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <h1>About Vertex Smelting</h1>
        <p>
          Precision refining. Trusted partnerships. Global standards in precious metals.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="about-section container-hero">
        <div className="about-image">
          <img src={about1} alt="Refinery" />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Vertex Smelting Company is a leading precious metals refinery
            specializing in gold, silver, and platinum group metals.
          </p>
          <p>
            We provide end-to-end solutions including assaying, refining,
            secure logistics, and global distribution.
          </p>
          <p>
            Our commitment to transparency, compliance, and precision
            makes us a trusted partner across Africa and beyond.
          </p>
        </div>
      </div>

      {/* SECTION 2 (REVERSED) */}
      <div className="about-section reverse container-hero">
        <div className="about-image">
          <img src={about2} alt="Gold processing" />
        </div>

        <div className="about-text">
          <h2>Our Expertise</h2>
          <p>
            With advanced refining technology and industry expertise,
            we ensure high-purity output and globally accepted standards.
          </p>
          <p>
            From artisanal miners to large-scale investors, we support
            every stage of the precious metals value chain.
          </p>
          <p>
            Our processes are designed for efficiency, security, and sustainability.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="about-section container-hero">
        <div className="about-image">
          <img src={about3} alt="Mining operations" />
        </div>

        <div className="about-text">
          <h2>Our Commitment</h2>
          <p>
            We are committed to ethical sourcing, regulatory compliance,
            and responsible mining practices.
          </p>
          <p>
            Through innovation and strong partnerships, we continue to
            drive growth and trust in the precious metals industry.
          </p>
          <p>
            At Vertex, integrity and excellence define everything we do.
          </p>
        </div>
      </div>

      {/* MISSION / VISION */}
      <div className="about-values">
        <div className="value-card">
          <h3>Our Mission</h3>
          <p>
            To deliver world-class refining services with transparency,
            efficiency, and unmatched reliability.
          </p>
        </div>

        <div className="value-card highlight">
          <h3>Our Vision</h3>
          <p>
            To become Africa’s most trusted and globally recognized
            precious metals refinery.
          </p>
        </div>

        <div className="value-card">
          <h3>Our Values</h3>
          <p>
            Integrity, precision, innovation, and long-term partnerships.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
import React, { useState } from "react";
import "./ConsultancyPage.css";

import consult2 from "../../assets/ref2.jpg";

const ConsultancyPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToForm = () => {
    document.getElementById("book").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="consultancy-page">

      {/* HERO */}
      <section className="consult-hero">
        <div className="overlay">
          <h1>Consultancy Services for Precious Metals Transactions</h1>

          <div className="trust-badges">
            <span>Trusted Expertise</span>
            <span>Secure Execution</span>
            <span>Verified Value</span>
          </div>

          <p>
            We provide strategic advisory and hands-on support for high-value
            precious metals transactions across Africa and internationally.
          </p>

          {/* MAIN CTA */}
          <button className="gold-btn" onClick={scrollToForm}>
            BOOK A CONSULTATION →
          </button>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/254113410633?text=Hello%20Vertex%20Smelting,%20I%20would%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>

          <p className="consult-note">
            Unlimited consultation slots available weekly
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="consult-intro">
        <div className="container">
          <h2>Seamless & Secure Transactions</h2>

          <p>
            From verification to delivery, we ensure your transactions are
            seamless, secure, and fully compliant every step of the way.
          </p>

          <p>
            Whether you're purchasing refined gold, selling from a mine,
            or structuring an international deal, we act as your expert partner.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="consult-services">
        <h2>How We Help You</h2>

        <div className="service-grid">
          <div>Assaying & Verification</div>
          <div>Laser Marking & Structuring</div>
          <div>Transaction Documentation</div>
          <div>Taxation & Compliance</div>
          <div>Time-sensitive Shipments</div>
          <div>Financing & Banking</div>
        </div>

        <button className="gold-btn" onClick={scrollToForm}>
          BOOK A CONSULTATION →
        </button>
      </section>

      {/* EXPERTISE */}
      <section className="consult-expertise">

        <div className="expertise-block">
          <h3>Assaying & Verification</h3>
          <p>Independent lab testing ensures purity and authenticity.</p>
        </div>

        <div className="expertise-block">
          <h3>Buyer & Seller Matching</h3>
          <p>We connect you with verified miners and investors.</p>
        </div>

        <div className="expertise-block">
          <h3>Transaction Documentation</h3>
          <p>We handle all legal and compliance paperwork.</p>
        </div>

        <div className="expertise-block">
          <h3>Taxation & Compliance</h3>
          <p>Stay compliant with international regulations.</p>
        </div>

        <div className="expertise-block">
          <h3>Financing & Banking</h3>
          <p>Secure payment and escrow structuring.</p>
        </div>

      </section>

      {/* LOGISTICS */}
      <section className="consult-logistics">
        <div className="text">
          <h2>Logistics & Global Delivery</h2>
          <p>
            Secure, fast and compliant logistics for high-value shipments.
          </p>
        </div>

        <div className="image">
          <img src={consult2} alt="Logistics" />
        </div>
      </section>

      {/* FORM */}
      <section className="consult-form" id="book">
        <h2>Request a Call Back</h2>
        <p>We’ll contact you within minutes during business hours.</p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          {/* 🔑 REPLACE WITH YOUR KEY */}
          <input type="hidden" name="access_key" value="de8a7dec-fef4-4013-8f84-b832fe22d4de" />

          <input type="text" name="name" placeholder="First Name" required />
          <input type="text" name="surname" placeholder="Last Name" required />
          <input type="text" name="company" placeholder="Company Name" />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email Address" required />

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* FAQ */}
      <section className="consult-faq">
        <h2>Frequently Asked Questions</h2>

        {/* 1 */}
        <div className={`faq-item ${activeIndex === 0 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(0)}>
            <h4>What does your consultancy service cover?</h4>
            <span>{activeIndex === 0 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              Our consultancy service provides end-to-end support for precious metals transactions including assaying, gold verification, buyer-seller matchmaking, documentation, tax and compliance advisory, logistics coordination, and secure delivery to international destinations.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className={`faq-item ${activeIndex === 1 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
            <h4>Who can benefit from the consulting services?</h4>
            <span>{activeIndex === 1 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              Our services are ideal for gold buyers, precious metals sellers, investors, refiners, tech manufacturers, and mining cooperatives needing compliance, export, or transaction support.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className={`faq-item ${activeIndex === 2 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
            <h4>How do you verify gold authenticity?</h4>
            <span>{activeIndex === 2 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              We operate a fully equipped in-house laboratory at Wilson Airport in Nairobi using XRF machines for accurate purity analysis. We also partner with certified laboratories across Africa for verification and documentation.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className={`faq-item ${activeIndex === 3 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
            <h4>Can you help find buyers or sellers for gold?</h4>
            <span>{activeIndex === 3 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              Yes. We connect vetted buyers and sellers across Africa, the Middle East, Europe, and North America to ensure secure and transparent deals.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className={`faq-item ${activeIndex === 4 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(4)}>
            <h4>What kind of documentation do you assist with?</h4>
            <span>{activeIndex === 4 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              We assist with sales agreements, export permits, assay reports, KYC/AML compliance documents, customs declarations, and ethical sourcing certifications.
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className={`faq-item ${activeIndex === 5 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(5)}>
            <h4>Do you offer support with international delivery?</h4>
            <span>{activeIndex === 5 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              Yes. We provide secure, insured delivery of gold to the USA, Europe, and UAE, either airport-to-airport or directly to a vault or refinery, ensuring full compliance.
            </p>
          </div>
        </div>

        {/* 7 */}
        <div className={`faq-item ${activeIndex === 6 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(6)}>
            <h4>Can you advise on taxes and financial compliance?</h4>
            <span>{activeIndex === 6 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              Yes. We provide guidance on taxation, import/export duties, and financial compliance for cross-border transactions.
            </p>
          </div>
        </div>

        {/* 8 */}
        <div className={`faq-item ${activeIndex === 7 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(7)}>
            <h4>Do you offer escrow or payment security services?</h4>
            <span>{activeIndex === 7 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              While we do not act as an escrow agent, we assist clients in setting up secure escrow arrangements and verifying payment terms.
            </p>
          </div>
        </div>

        {/* 9 */}
        <div className={`faq-item ${activeIndex === 8 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(8)}>
            <h4>How is your consultancy service billed?</h4>
            <span>{activeIndex === 8 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              It costs USD 2,500 to establish a master account. Services are billed hourly or as custom packages depending on the scope.
            </p>
          </div>
        </div>

        {/* 10 */}
        <div className={`faq-item ${activeIndex === 9 ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(9)}>
            <h4>How do I get started?</h4>
            <span>{activeIndex === 9 ? "−" : "+"}</span>
          </div>
          <div className="faq-answer">
            <p>
              Simply reach out via the Contact Page to schedule a consultation. We will assess your needs and guide you step by step.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
};

export default ConsultancyPage;
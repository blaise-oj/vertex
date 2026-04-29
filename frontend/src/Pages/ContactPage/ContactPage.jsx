import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <h1>Send Us a Message</h1>
        <p>Use the form below to reach out to our team.</p>
        <p className="hours">Office Hours: Mon - Fri / 9:30AM - 4:30PM</p>
      </div>

      {/* FORM */}
      <form
        className="contact-form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >

        {/* REQUIRED */}
        <input type="hidden" name="access_key" value="de8a7dec-fef4-4013-8f84-b832fe22d4de" />

        {/* OPTIONAL */}
        <input type="hidden" name="subject" value="New Contact Form Submission - Vertex Smelting Company" />

        {/* NAME */}
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Telephone</label>
            <input type="tel" name="phone" required />
          </div>
        </div>

        {/* EMAIL */}
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Country</label>
            <input type="text" name="country" />
          </div>
        </div>

        {/* ORGANIZATION */}
        <div className="form-group">
          <label>Organization</label>
          <select name="organization">
            <option>Individual</option>
            <option>Organization</option>
          </select>
        </div>

        <div className="form-group">
          <label>Organization Name</label>
          <input type="text" name="organization_name" />
        </div>

        {/* SERVICES */}
        <div className="form-group">
          <label>Services Interested In</label>

          <div className="checkbox-grid">
            <label><input type="checkbox" /> Consultancy</label>
            <label><input type="checkbox" /> End-to-End Gold Deal Facilitation</label>
            <label><input type="checkbox" /> KYC/AML Due Diligence Support</label>

            <label><input type="checkbox" /> Refinery</label>
            <label><input type="checkbox" /> Laser Marking</label>
            <label><input type="checkbox" /> Assaying & Purity Certification</label>

            <label><input type="checkbox" /> Airport-to-Airport Logistics</label>
            <label><input type="checkbox" /> Delivery to Refinery or Vault</label>

            <label><input type="checkbox" /> Partnership</label>
            <label><input type="checkbox" /> Tax & Compliance Advisory</label>
            <label><input type="checkbox" /> Documentation & Export Permits</label>
          </div>
        </div>

        {/* SUBJECT */}
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject_line" />
        </div>

        {/* MESSAGE */}
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" required></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>

      </form>

    </div>
  );
};

export default ContactPage;
import React, { useState } from 'react'
import './WhatsAppWidget.css'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WhatsAppWidget = () => {

  const [open, setOpen] = useState(false)

  const phone = "254716008031"

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="whatsapp-widget">

      {/* 🔹 POPUP */}
      {open && (
        <div className="chat-box">

          <div className="chat-header">
            <h4>Start a Conversation</h4>
            <FaTimes onClick={() => setOpen(false)} />
          </div>

          <p className="chat-subtext">
            Hi! Click one of our members below to chat on WhatsApp  
            <br />
            The team typically replies in a few minutes.
          </p>

          {/* OPTIONS */}
          <div className="chat-options">

            <div onClick={() => openWhatsApp("Hello (Glorioush Medical Supply), I have an enquiry")}>
              <strong>Other Enquiries</strong>
              <span>Other Enquiries</span>
            </div>

            <div onClick={() => openWhatsApp("Hello (Glorioush Medical Supply), I'm interested in Dental Equipment")}>
              <strong>Dental Equipment</strong>
              <span>Dental Equipment</span>
            </div>

            <div onClick={() => openWhatsApp("Hello (Glorioush Medical Supply), I'm interested in Medical Equipment")}>
              <strong>Medical Equipment</strong>
              <span>Medical Equipment</span>
            </div>

          </div>

        </div>
      )}

      {/* 🔹 FLOATING BUTTON */}
      <div className="whatsapp-btn" onClick={() => setOpen(!open)}>
        <FaWhatsapp />
        <span>Need help? Chat with us</span>
      </div>

    </div>
  )
}

export default WhatsAppWidget
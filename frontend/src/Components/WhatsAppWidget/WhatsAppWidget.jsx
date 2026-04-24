import React, { useState } from 'react'
import './WhatsAppWidget.css'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WhatsAppWidget = () => {

  const [open, setOpen] = useState(false)

  const phone = "254113410633"

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

            <div onClick={() => openWhatsApp("Hello (Vertex Smelting Company), I have an enquiry")}>
              <strong>Other Enquiries</strong>
              <span>Other Enquiries</span>
            </div>

            <div onClick={() => openWhatsApp("Hello (Vertex Smelting Company), I'm interested in ")}>
              <strong>General Support</strong>
              <span>General Support</span>
            </div>

            <div onClick={() => openWhatsApp("Hello (Vertex Smelting Company), I'm interested in your refining services")}>
              <strong>Refining Services</strong>
              <span>Refining Services</span>
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
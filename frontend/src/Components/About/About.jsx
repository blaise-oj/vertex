import React, { useEffect, useState } from 'react'
import './About.css'
import { FaIndustry, FaShieldAlt, FaGlobeAfrica, FaUsers } from 'react-icons/fa'

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return <>{count}</>
}

const About = () => {
  return (
    <section className="about container-hero">

      {/* LEFT TEXT */}
      <div className="about-text">
        <h2>Why Vertex Smelting</h2>

        <p>
          <strong>Vertex Smelting Company</strong> is a trusted name in precious metals
          refining, delivering world-class solutions across gold, silver, and
          platinum group metals.
        </p>

        <p>
          We combine advanced refining technology, strict compliance standards,
          and deep industry expertise to ensure every transaction is secure,
          transparent, and globally accepted.
        </p>

        <p>
          From artisanal miners to global investors and industrial partners,
          we provide reliable access to Africa’s precious metals value chain —
          with integrity, precision, and efficiency at every stage.
        </p>
      </div>

      {/* RIGHT STATS */}
      <div className="about-stats">

        <div className="stat">
          <FaIndustry className="stat-icon" />
          <h3><Counter end={15} />+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <FaUsers className="stat-icon" />
          <h3><Counter end={1200} />+</h3>
          <p>Clients Served</p>
        </div>

        <div className="stat">
          <FaGlobeAfrica className="stat-icon" />
          <h3><Counter end={10} />+</h3>
          <p>Countries Reached</p>
        </div>

        <div className="stat">
          <FaShieldAlt className="stat-icon" />
          <h3><Counter end={100} />%</h3>
          <p>Secure Transactions</p>
        </div>

      </div>

    </section>
  )
}

export default About
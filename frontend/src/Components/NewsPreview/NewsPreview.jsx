import React from "react";
import "./NewsPreview.css";
import { Link } from "react-router-dom";

import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import ref9 from "../../assets/ref9.jpg";

const NewsPreview = () => {
  const news = [
    {
      image: ref9,
      title: "Global Gold Demand Continues to Rise",
      text: "Increasing industrial use and investment demand are driving global gold prices upward.",
    },
    {
      image: news2,
      title: "Advancements in Refinery Technology",
      text: "Modern refining techniques are improving efficiency and reducing environmental impact.",
    },
    {
      image: news3,
      title: "Africa’s Role in Precious Metals Supply",
      text: "Africa continues to play a key role in supplying gold and rare metals to global markets.",
    },
  ];

  return (
    <section className="news section">

      {/* HEADER */}
      <div className="news-header">
        <h2>Latest News & Insights</h2>
        <p>Stay updated with trends in precious metals and refining.</p>
      </div>

      {/* CARDS */}
      <div className="news-container">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <Link to="/news" className="news-btn">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default NewsPreview;
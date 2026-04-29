import React from "react";
import "./NewsPage.css";
import { Link } from "react-router-dom";
import newsData from "../../data/newsData";

const NewsPage = () => {
  const featured = newsData[0];

  return (
    <section className="news-page section">

      {/* FEATURED */}
      <div className="featured">
        <img src={featured.image} alt={featured.title} />
        <div className="featured-content">
          <h2>{featured.title}</h2>
          <p>{featured.date}</p>
          <Link to={`/news/${featured.id}`}>Read Full Article →</Link>
        </div>
      </div>

      {/* GRID */}
      <div className="news-grid">
        {newsData.map((item) => (
          <div className="news-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <Link to={`/news/${item.id}`}>Read More</Link>
          </div>
        ))}
      </div>

    </section>
  );
};

export default NewsPage;
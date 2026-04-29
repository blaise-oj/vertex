import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../../data/newsData";
import "./NewsArticle.css";

const NewsArticle = () => {
  const { id } = useParams();
  const article = newsData.find(item => item.id === id);

  if (!article) {
    return <h2 style={{ padding: "100px" }}>Article not found</h2>;
  }

  return (
    <div className="article section">

      <img src={article.image} alt={article.title} />

      <h1>{article.title}</h1>
      <p className="date">{article.date}</p>

      <div className="content">
        {article.content}
      </div>

    </div>
  );
};

export default NewsArticle;
import React from "react";
import "./Home.css";

const CardShimmer = () => {
  return (
    <article className="shimmer-article">
      <div className="shimmer-image"></div>
      <div className="shimmer-content">
        <div className="shimmer-title"></div>
        <div className="shimmer-text"></div>
        <div className="shimmer-buttons">
          <div className="shimmer-text"></div>
          <div className="shimmer-button"></div>
        </div>
      </div>
    </article>
  );
};

const HeaderShimmer = () => {
  return (
    <header>
      <nav>
        <div className="ul-container">
          <div className="li-container">
            <div className="shimmer-logo"></div>
            <div className="shimmer-name"></div>
          </div>
          <div className="li-container">
            <div className="shimmer-cart"></div>
            <div className="shimmer-filter"></div>
            <div className="shimmer-button"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Shimmer = () => {
  return (
    <section className="properties-list-container">
      {Array(30)
        .fill("")
        .map((element, index) => (
          <CardShimmer key={index} />
        ))}
    </section>
  );
};

export { Shimmer, HeaderShimmer };

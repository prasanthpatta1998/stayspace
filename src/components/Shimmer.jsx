import React from "react";
import "./Home.css";

const CardShimmer = () => {
  return (
    <article class="shimmer-article">
      <div class="shimmer-image"></div>
      <div class="shimmer-content">
        <div class="shimmer-title"></div>
        <div class="shimmer-text"></div>
        <div class="shimmer-buttons">
          <div class="shimmer-text"></div>
          <div class="shimmer-button"></div>
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

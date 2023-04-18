import React from 'react';

export default function Home() {
  return (
    <div className="homepage--container">
      <div className="bkg-anim" />
      <div className="bkg-anim" />
      <div className="header-wrapper">
        <h1 id="homepage-header">
          TRACK
          <span className="grey"> CURRENCIES </span>
          RATES
          <span className="grey"> AROUND </span>
          THE WORLD
          <span className="grey"> DAY </span>
          BY
          <span className="grey"> DAY </span>
        </h1>
        <div type="button" id="homepage-btn">
          <a href="/currencies_list">
            <div className="btn-left--arrow">
              <i className="fa-solid fa-chevron-right" />
            </div>
            <p>Currencies rates</p>
            <div className="btn-right--arrows">
              <i className="fa-solid fa-angle-right" />
              <i className="fa-solid fa-angle-right" />
              <i className="fa-solid fa-angle-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

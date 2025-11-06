import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-overlay">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">
              Premium Quality • Finest Milled • Trusted Excellence
            </h1>
            <p className="hero-sub">
              Expertly operated and precision-milled grains, delivering pure taste in every grain.
            </p>
          </div>

          <div className="hero-features">
            <div className="feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div className="feature-text">
                <strong>Reliable Delivery</strong>
                <span>Fast, tracked shipments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

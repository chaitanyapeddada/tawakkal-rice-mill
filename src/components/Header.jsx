import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-overlay">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">Quality Rice • Trusted Hope</h1>
            <p className="hero-sub">
              Premium basmati and regional varieties — carefully milled and packed for freshness.
            </p>
            <div className="hero-ctas">
              <Link to="/services" className="btn btn-primary">Our Services</Link>
              <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
            </div>
          </div>

          <div className="hero-features">
            <div className="feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M5 8c3-3 8-4 14-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              <div className="feature-text">
                <strong>Fresh Selection</strong>
                <span>Handpicked varieties</span>
              </div>
            </div>

            <div className="feature">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/></svg>
              <div className="feature-text">
                <strong>Bulk & Retail</strong>
                <span>1kg — 25kg packaging</span>
              </div>
            </div>

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

import React from 'react';
import './Gallery.css';

const products = [
  {
    image: "/images/machine1.jpg",
    title: "Polishing Machine",
    description: "High polish finish",
    details: "Low breakage",
  },
  {
    image: "/images/rice2.jpg",
    title: "Sona Masoori",
    description: "Light & fluffy",
    details: "Bulk & retail",
  },
  {
    image: "/images/mill.jpg",
    title: "Modern Milling",
    description: "Precision milling",
    details: "ISO certified",
  },
  {
    image: "/images/mill2.jpg",
    title: "Cleaning Line",
    description: "Advanced cleaning",
    details: "High throughput",
  },
  {
     image: "/images/logo.jpg",
    title: "Premium Basmati",
    description: "Aromatic long grain",
    details: "1kg, 5kg, 25kg",
  },
  {
    image: "/images/rice1.jpg",
    title: "Packaging",
    description: "Hygienic packing",
    details: "Custom packages",
  },
];

const Gallery = () => (
  <section className="gallery-section">
    <h2 className="gallery-title">Our Services</h2>
    <div className="rice-grid">
      {products.map((p, i) => (
        <div key={i} className="flip-card" role="article" aria-label={p.title}>
          <div className="flip-card-inner" tabIndex={0} aria-hidden="false">
            <div className="flip-card-front">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="flip-card-back">
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <p className="details">{p.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;

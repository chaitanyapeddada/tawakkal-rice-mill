import React from 'react';
import './BranchList.css';

const branches = [
  {
    id: 1,
    name: "Branch",
    address: "TAWAKKAL RICE MILL Main Road Ganugu Pahad Ganguphad,",
    city: "Jangaon",
    state: "Telangana",
    phone: "+91 99663 99369",
    hours: "Mon-Sat: 6AM-12AM"
  },
  {
    id: 2,
    name: "Branch",
    address: "TAWAKKAL RICE MILL M643+FM8, Lingalaghanpur",
    city: "Lingalaghanpur",
    state: "Telangana ",
    phone: "+91 90105 19419",
    hours: "Mon-Sat: 6AM-12AM"
  },
];

const BranchList = () => {
  return (
    <section className="branch-section">
      <h2>Our Branches</h2>
      <div className="branch-grid">
        {branches.map(branch => (
          <div key={branch.id} className="branch-card">
            <div className="branch-header">
              <h3>{branch.name}</h3>
              <span className="badge">{branch.city}</span>
            </div>
            <div className="branch-details">
              <p><i className="fas fa-map-marker-alt"></i> {branch.address}</p>
              <p><i className="fas fa-phone"></i> {branch.phone}</p>
              <p><i className="fas fa-clock"></i> {branch.hours}</p>
            </div>
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(branch.address + ' ' + branch.city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              View on Map
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BranchList;

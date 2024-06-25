import React from 'react';

export default function Description() {
  return (
    <section id="description">
      <div className="row container">
        <div className="col-sm">
          <i className="bi bi-images"></i>
          <h4>Drone Photography and Video</h4>
          <p>Customize your package for photo and video that best fits your next project for an elevated view.</p>
        </div>

        <div className="col-sm">
          <i className="bi bi-calendar-check-fill"></i>
          <h4>Easy Booking</h4>
          <p>Quickly get started on the next project by reaching out to us with your preferred project date.</p>
        </div>

        <div className="col-sm">
          <i className="bi bi-airplane"></i>
          <h4>FAA Certified</h4>
          <p>Part 107 certified and insured to fly UAV</p>
        </div>
      </div>
    </section>
  );
}



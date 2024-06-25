import React from 'react';

export default function About() {
  return (
    <section id="about">
      <h2 id="about-title">About Us</h2>
      <div className="about-content">
        <div className="about-image">
          <img id="about-image" src="/img/headshot.jpeg" alt="Mark Khol" />
          <h4><strong>Mark Kohl</strong></h4>
        </div>
        <div className="about-text">
          <p>At MK Drone and Media, we excel at providing a world-class experience from an elevated view in a cost-effective way.</p>
          <p>Our unwavering commitment to safety, quality, and reliability is evident through our full FAA certification, registration of all aerial vehicles, and comprehensive insurance coverage, offering you peace of mind while partnering with us.</p>
          <p>Our team is enthusiastic about offering world-class services in drone video and photography content to elevate you when we collaborate on your next project!</p>
          <p>It is our goal to offer our clients the most cost-effective drone services and packages in the region. We are a recently established digital media and photography services company with a world-class reputation in customer satisfaction and are proud to carry that tradition to our aerial offerings and photography.</p>
        </div>
      </div>
    </section>
  );
}


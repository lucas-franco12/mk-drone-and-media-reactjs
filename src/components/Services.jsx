import React from 'react';
import images from '../carouselImages';


export default function Services() {
    const carouselIndicators = images.map((image, index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
          aria-current={index === 0 ? 'true' : ''}
          aria-label={`Slide ${index + 1}`}
        ></button>
    ));

    const carouselElements = images.map((image, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img
            src={image.src}
            alt={image.alt}
            className="d-block w-100 mission-img"
          />
        </div>
    ));
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="services-content col-md">
            <h3>Services</h3>
            <p>Roof Inspections, Drone Video, Landscaping, Parties and Events, Real Estate, Aerial Photography, Utilities, HOA Services, Boat Photography, Infrastructure, Cars, Farm Land, Disaster and Emergency Aerial Services, and much more!</p>
            <p>Get a free quote today!</p>
            <button className="btn btn-outline-info">
              <a href="#contact-target">Request a Quote</a>
            </button>
          </div>

          <div id="carouselExampleIndicators" className="carousel slide services-carousel col-md">
            <div className="carousel-indicators">
                {carouselIndicators}
            </div>
            <div className="carousel-inner">
                {carouselElements}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


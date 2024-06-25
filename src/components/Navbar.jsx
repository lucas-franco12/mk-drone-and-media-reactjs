import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#hero-target">
          <span id="logo">MK</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#services-target">Services</a>
            <a className="nav-link" href="#about-target">About</a>
            <a className="nav-link" href="#gallery-target">Gallery</a>
            <a className="nav-link" href="#contact-target">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




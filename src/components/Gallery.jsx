import React from 'react';
import images from '../galleryImages'; 

export default function Gallery() {
  const openFullImg = (src) => {
    document.getElementById("full-img-container").style.display = "flex";
    document.getElementById("full-img").src = src;
  };

  const closeFullImg = () => {
    document.getElementById("full-img-container").style.display = "none";
  };

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="full-img" id="full-img-container">
        <img src="" id="full-img" alt="Full" />
        <span onClick={closeFullImg}>X</span>
      </div>
      <div className="img-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openFullImg(image.src)}
          />
        ))}
      </div>
    </section>
  );
}



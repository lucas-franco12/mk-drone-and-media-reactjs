import React from 'react';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container-fluid footer-content">
        <div className="footer-paragraph">
          <p>&copy; Lucas Franco 2023</p>
        </div>

        <div className="footer-icons">
          <a href="https://www.instagram.com/mkdroness/" data-tooltip="mkdroness" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/mkdrones" data-tooltip="mkdrones" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="tel: +3524847035" data-tooltip="+352-484-7035">
            <i className="bi bi-telephone"></i>
          </a>
          <a href="mailto: markkohl123@yahoo.com" data-tooltip="markkohl123@yahoo.com">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}


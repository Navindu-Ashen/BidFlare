import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>BidFlare</h2>
          <div className="resources">
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Portal Policies</a></li>
              <li><a href="#">Bidders Manual Kit</a></li>
              <li><a href="#">Help For Contractors</a></li>
              <li><a href="#">Information About DSC</a></li>
            </ul>
          </div>

          
        </div>

        <div className="footer-center">
          <h4>Contact Us</h4>
          <p>📞 0120-4001 002 / 0120-4001 005 / 0120-627787</p>
          <p>📧 contact.bidflare@gmail.com</p>
        </div>

        <div className="footer-right">
          <div className="qr-code">
            <img src="src/image/logo.png" alt="BidFlare Logo" />
            <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank"  aria-label="LinkedIn"><FaLinkedin className="social-icon" /></a>
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook className="social-icon" /></a>
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
            <a href="mailto:contact.bidflare@gmail.com" target="_blank" aria-label="Email"><FaEnvelope className="social-icon" /></a>
          </div>
          </div>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2023 BidFlare. All Rights Reserved</p>
      </div>
      
    </footer>
  );
};

export default Footer;

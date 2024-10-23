import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>eAuction <span>India</span></h2>
          

          <div className="resources">
            <h4>Resource</h4>
            <ul>
              <li><a href="#">Help For Contractors</a></li>
              <li><a href="#">Information About DSC</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Bidders Manual Kit</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Portal Policies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-center">
          <h4>Contact Us</h4>
          <p>📞 0120-4001 002 / 0120-4001 005 / 0120-627787</p>
          <p>📧 eAuction@gmail.com</p>
        </div>

        <div className="footer-right">
          <div className="qr-code">
            {/* Add your QR code image here */}
            <img src="path_to_your_qr_code_image.png" alt="QR Code" />
          </div>
          <div className="social-icons">
            {/* Add social media icons */}
            <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
            <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="email-icon.png" alt="Email" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2023 ISRO. All Rights Reserved</p>
      </div>
    </footer>
  );
};


export default Footer;

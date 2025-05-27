// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <img src="/logoShop.png" alt="Logo" className="footer__logo" />
          <p>
            We are committed to delivering the latest fashion trends with quality and style. Explore our collections and stay inspired.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4>Home</h4>
            <a href="#">Contact Us</a>
            <a href="#">Order Tracking</a>
            <a href="#">Returns & Exchanges</a>
            <a href="#">FAQs</a>
          </div>
          <div className="footer__column">
            <h4>About Us</h4>
            <a href="#">Our Story</a>
            <a href="#">Certification</a>
            <a href="#">Sustainability</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer__column">
            <h4>Customer Service</h4>
            <a href="#">Contact Us</a>
            <a href="#">Order Tracking</a>
            <a href="#">Returns & Exchanges</a>
            <a href="#">FAQs</a>
          </div>
          <div className="footer__column">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Size Guide</a>
            <a href="#">Gift Cards</a>
            <a href="#">Affiliate Program</a>
          </div>
        </div>

        <div className="footer__subscribe">
          <h4>Subscribe for Promotions</h4>
          <p>Sign up to receive exclusive offers, updates, and style tips directly to your inbox.</p>
          <div className="footer__form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="footer__socials">
            <span>Connect with us</span>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faPinterest} />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Do Not Sell or Share My Personal Information</a>
          <a href="#">Supply Chain Transparency</a>
          <a href="#">Vendor Code of Conduct</a>
          <a href="#">Sitemap Pages</a>
          <a href="#">Sitemap Products</a>
        </div>
        <p>© 2023 Fashion Co. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

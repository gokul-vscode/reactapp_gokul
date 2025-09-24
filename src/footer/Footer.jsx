import React from "react";
import "./Footer.css"; // New CSS file
import logo from "../../src/assets/logo-white.svg";
import { LuMail, LuSendHorizontal } from "react-icons/lu";
import { MdAddCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer-container"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="footer-grid">
        {/* Logo & Contact */}
        <div className="footer-section logo-contact">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="address">
            North Car Street, Parasakthi Colony, Sivakas, 626123
          </p>
          <p className="contact">
            <LuMail className="icon" /> ramgokul@gmail.com
          </p>
          <p className="contact">
            <MdAddCall className="icon" /> 6379624525
          </p>
          <div className="social-icons">
            <FaFacebook className="social facebook" />
            <BsTwitterX className="social twitter" />
            <FaSquareInstagram className="social instagram" />
            <IoLogoWhatsapp className="social whatsapp" />
          </div>
        </div>

        {/* Information */}
        <div className="footer-section info-service">
          <div className="info">
            <h3>Information</h3>
            <p>About Us</p>
            <p>Our Stories</p>
            <p>Size Guide</p>
            <p>Contact Us</p>
            <p>Career</p>
            <p>My Account</p>
          </div>
          <div className="service">
            <h3>Customer Service</h3>
            <p>Shipping</p>
            <p>Return & Refund</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Order FAQs</p>
            <p>My Wishlist</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Sign up for our newsletter and get 10% off your first purchase</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="send-btn">
              <LuSendHorizontal />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Your Company. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;

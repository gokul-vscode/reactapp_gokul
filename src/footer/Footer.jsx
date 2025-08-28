import React from "react";
import "../footer/Footer.css";
import logo from "../../src/assets/logo-white.svg";
import { LuMail } from "react-icons/lu";
import { MdAddCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import { LuSendHorizontal } from "react-icons/lu";
const Footer = () => {
  return (
    <>
      <motion.div
        className="wholefooter"
        initial={{ y: 100, Opacity: 0 }}
        whileInView={{ y: 0, Opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amont: 0.5 }}
      >
        <div className="subfooter">
          <div className="footerparent">
            <div className="footercard">
              <div className="logopage">
                <img src={logo} alt="" className="logoimg" />
              </div>
              <div className="otherdetails">
                <p className="address">
                  North Car Street,Parasakthi Colony, Sivakas,626123.
                </p>
                <p className="direction">GET DIRECTION</p>
                <p className="mail">
                  {" "}
                  <LuMail className="iconss" />
                  ramgokul@gmail.com
                </p>
                <p className="mobile-no">
                  {" "}
                  <MdAddCall className="iconss" /> 6379624525
                </p>
                <div className="socialmedia">
                  <p>
                    <FaFacebook className="facebook" />
                  </p>
                  <p>
                    <BsTwitterX className="twitter" />
                  </p>
                  <p>
                    <FaSquareInstagram className="insta" />
                  </p>
                  <p>
                    <IoLogoWhatsapp className="whatsapp" />
                  </p>
                </div>
              </div>
            </div>
            <div className="footercard2">
              <div className="information">
                <h3>Information</h3>
                <p>About Us</p>
                <p>Our Stories</p>
                <p>Size Guide</p>
                <p>Contact Us</p>
                <p>Carrer</p>
                <p>My Account</p>
              </div>
              <div className="customer">
                <h3>Customer Service</h3>
                <p>Shipping</p>
                <p>Return & Refund</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Order FAQs</p>
                <p>My Wishlist</p>
              </div>
            </div>
            <div className="footercard3">
              <div className="lastbottom">
                <p className="newletter"> NewLetter</p>
                <p className="signdetail">
                  Sign up for our newsletter and get 10% off your first purchase
                </p>
                <div className="emailcontainer">
                  <input
                    type="email"
                    className="lastemail"
                    placeholder="enter Your Email"
                  />
                  <p className="sendicon">
                    <LuSendHorizontal />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;

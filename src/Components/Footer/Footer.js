import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pd_foor_pg_footer">
      <div className="container">
        <div className="row gy-4">
          {/* Address Section */}
          <div className="col-lg-4 col-md-6 pd_foor_pg_address">
            <h5>Our Location</h5>
            <p>
              <FaMapMarkerAlt className="pd_foor_pg_icon" />
              2nd floor, Jaycees school bus stop, opp.
            </p>
            <p>Union Bank upstairs, Chettipalayam, Erode,</p>
            <p>Kurikaranpalayam, Tamil Nadu 638002</p>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 pd_foor_pg_contact">
            <h5>Contact Us</h5>
            <p>
              <FaPhoneAlt className="pd_foor_pg_icon" /> +91 75400 33060
            </p>
            <p>
              <FaEnvelope className="pd_foor_pg_icon" /> pdfitness@gmail.com
            </p>
            <div className="pd_foor_pg_social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="pd_foor_pg_icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube className="pd_foor_pg_icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="pd_foor_pg_icon" />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-lg-4 col-md-12 pd_foor_pg_map_wrap">
            <h5>Find Us</h5>
         <iframe  className="pd_foor_pg_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.098824959491!2d77.7255496!3d11.306796499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fc3523d4005%3A0xe8651f60cfd87809!2sPower%20of%20Dreams%20Dance%20%26%20Fitness%20Studio!5e1!3m2!1sen!2sin!4v1759411384194!5m2!1sen!2sin"  allowfullscreen=""
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
            
           </iframe>
          </div>
        </div>

        <hr className="pd_foor_pg_line" />
        <div className="pd_foor_pg_copy">
          <p>© 2020 Power of Dreams Dance & Fitness Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

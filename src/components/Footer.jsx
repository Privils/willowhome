import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="newsletter" data-aos="fade-up" data-aos-duration="1200">
            <h3>join our newsletter</h3>
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button className='hvr-radial-out custom-radial'>submit</button>
            <p>
              No spam, just style. Get design tips,
              fresh finds, and special offers
              straight to your inbox!
            </p>
          </div>

          <div className="quick-links" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <h2>quick links</h2>
            <ul>
              <li><Link to="#">home</Link></li>
              <li><Link to="#">shop</Link></li>
              <li><Link to="#">about us</Link></li>
              <li><Link to="#">contact</Link></li>
              <li><Link to="#">FAQS</Link></li>
            </ul>
          </div>

          <div className="usefull-info" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
            <h2>usefull info</h2>
            <ul>
              <li>shipping & returns</li>
              <li>Privacy Policy</li>
              <li>Terms & conditions</li>
              <li>Track Your order</li>
            </ul>
          </div>

          <div className="connect" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
            <h2>connect</h2>
            <ul>
              <li><Link to="#" className="Insta"><FaInstagram /></Link></li>
              <li><Link to="#" className="Fb"><FaFacebook /></Link></li>
              <li><Link to="#" className="Pint"><FaPinterest /></Link></li>
              <li><Link to="#" className="Tik"><FaTiktok /></Link></li>
            </ul>
          </div>
        </div>

        <div className="copy-cont" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
          <p className="copywrite">&copy; 2025 <Link to="privilswebdev.co.za">privilswebdev</Link>. all rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

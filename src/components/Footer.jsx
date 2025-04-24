import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok} from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
   <>
    <footer>
       <div className="footer-container">
           <div className="newsletter">
               <h3>join our newsletter</h3>
               <input type="text" name="" id="" /><button>clikc</button>
               <p>
               024751
               </p>
           </div>
   
           <div>
               <h2>quick links</h2>
               <ul>
                   <li>hoe</li>
                   <li>shop</li>
                   <li>about us</li>
                   <li>contact</li>
                   <li>FAQS</li>
               </ul>
           </div>
           <div>
               <h2>usefull info</h2>
               <ul>
                   <li>
                       shipping & returns
                   </li>
                   <li>
                       Privacy Policy
                   </li>
                   <li>
                       Terms & conditions
                   </li>
                   <li>
                       Track Your order
                   </li>
               </ul>
           </div>
           <div>
               <h2>connect</h2>
               <ul>
                   <li><FaInstagram/></li>
                   <li><FaFacebook/></li>
                   <li><FaPinterest/></li>
                   <li><FaTiktok/></li>
               </ul>
           </div>
       </div>
       <div className="copy-cont">
           <p className="copywrite">&copy; 2025 <Link to="privilswebdev.co.za">privilswebdev</Link>.all rights reserved </p>
       </div>
      </footer>
   </>
  )
}

export default Footer

import React, { useEffect, useState } from 'react';
import { FaBars, FaClipboard, FaClosedCaptioning, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FaCartShopping, FaSquareXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import 'animate.css'; 

const Header = ({ setIsCartOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
   

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);
  return (
    <header>
      <Link to="/" className="logo animate__animated animate__backInUp animate__slow	3s">willowhome</Link>
      <nav>
        <ul className={isOpen ? 'open' : 'logo'}>
          <FaSquareXmark className='mark' onClick={closeMenu}/>
          <li className='animate__animated animate__backInDown animate__slow	1s hvr-underline-reveal-center'><Link to="#" onClick={closeMenu} className='hvr-underline-from-center'>shop</Link></li>
          <li className='animate__animated animate__backInDown animate__slow	1s'><Link to="#" onClick={closeMenu} className='hvr-underline-from-center'>contact</Link></li>
          <li className='animate__animated animate__backInDown animate__slow	1s'><Link to="#" onClick={closeMenu} className='hvr-underline-from-center'>about us</Link></li>
        </ul>

        <div className="nav-icons animate__animated animate__bounceIn animate__slow	3s">
          <FaSearch />
          <FaClipboard />
          
                      <FaShoppingCart onClick={() => setIsCartOpen(prev => !prev)}/>
          <FaBars className="bars" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

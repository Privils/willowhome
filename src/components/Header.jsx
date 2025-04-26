import React, { useState } from 'react';
import { FaBars, FaClipboard, FaClosedCaptioning, FaSearch } from 'react-icons/fa';
import { FaSquareXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <Link to="/" className="logo">willowhome</Link>
      <nav>
        <ul className={isOpen ? 'open' : ''}>
          <FaSquareXmark className='mark' onClick={closeMenu}/>
          <li><Link to="#" onClick={closeMenu}>shop</Link></li>
          <li><Link to="#" onClick={closeMenu}>contact</Link></li>
          <li><Link to="#" onClick={closeMenu}>about us</Link></li>
        </ul>

        <div className="nav-icons">
          <FaSearch />
          <FaClipboard />
          <FaBars className="bars" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

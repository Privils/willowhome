// import React, { useState } from 'react';
// import { FaBars, FaClipboard, FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const toggleMenu = () => {
//     console.log("clicked"); 
//     setIsOpen(!isOpen);
//   }
//   const closeMenu = () => setIsOpen(false)
//   return (
//     <header>
//       <nav>
//         <Link to="#" className="logo">willowhome</Link>
//         <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
//   <li><Link to="#" onClick={closeMenu}>shop</Link></li>
//   <li><Link to="#" onClick={closeMenu}>contact</Link></li>
//   <li><Link to="#" onClick={closeMenu}>about us</Link></li>
// </ul>

//         <div className="nav-icons">
//           <FaSearch/>
//           <FaClipboard />
//           <FaBars className="bars" onClick={toggleMenu}/>
//         </div>
       
//       </nav>
//       {isOpen && <div className="backdrop" onClick={closeMenu}></div>}
//     </header>
//   )
// }

// export default Header
import React, { useState } from 'react';
import { FaBars, FaClipboard, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    console.log("clicked"); 
    setIsOpen(!isOpen);
  }
  const closeMenu = () => setIsOpen(false)
  return (
  <>
 <header>
     <nav>
       <Link to="#" className="logo">willowhome</Link>
       <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
 <li><Link to="#" onClick={closeMenu}>shop</Link></li>
  <li><Link to="#" onClick={closeMenu}>contact</Link></li>
 <li><Link to="#" onClick={closeMenu}>about us</Link></li>
 </ul>

    <div className="nav-icons">
         <FaSearch/>
          <FaClipboard />
        <FaBars className="bars" onClick={toggleMenu}/>
       </div>
       
    </nav>
    {isOpen && <div className="backdrop" onClick={closeMenu}></div>}
    </header>
  </>
  )
}

export default Header


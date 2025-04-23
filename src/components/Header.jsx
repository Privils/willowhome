import React from 'react'
import { FaClipboard, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
    <header>
   <nav>
    <Link to='#' className='logo'>willowhome</Link>

    <ul>
    <li>
      <Link to='#'>shop</Link>
      </li>
      <li>
        <Link to='#'>contact</Link>
      </li>
      <li>
      <Link to='#'>about us</Link></li>
      
    </ul>
   </nav>
<div>
    <FaSearch/>
    <FaClipboard/>
</div>
  </header>
    </>
  )
}

export default Header

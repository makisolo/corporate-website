import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';




function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton()
    }, []);



    window.addEventListener('resize', showButton);



    return (
        <>
         <nav className="navbar">
            <div className="navbar-container">
            <img className="img" src="/images/logo.png" alt="" width={150} height={65}>
            </img>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas-fa-times': 'fas-fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item-1'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item-2'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item-3'>
                <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu} >
                  Portfolio
                </Link>
              </li>
              <li className='nav-item-4'>
                <Link to='/solutions' className='nav-links' onClick={closeMobileMenu} >
                  Solutions
                </Link>
              </li>
              <li className='nav-item-5'>
                <Link to='/tech-stacks' className='nav-links' onClick={closeMobileMenu} >
                  Tech Stacks
                </Link>
              </li>
              <li className='nav-item-6'>
                <Link to='/about-us' className='nav-links' onClick={closeMobileMenu} >
                  About Us
                </Link>
              </li>
              
              </ul>
              
            </div>  
         </nav>   
        </>
    );
}

export default Navbar;

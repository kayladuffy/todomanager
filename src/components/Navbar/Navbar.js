import React from 'react';
import { Link } from 'react-redux-dom';
import ContactUs from './ContactUs';

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
              <Link to='/' className="brand-logo">React Todo Manager</Link>
              <ContactUs />
            </div>
        </nav>   
    )  
  }
  
  export default Navbar
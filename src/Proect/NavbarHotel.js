import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import './NavbarStyle.scss'
import {Link} from "react-router-dom";


const NavbarHotel = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div id='navbar'>
          <div className="container">
              <div className="row d-block">
                  <Navbar className='py-0 my-0'  light expand="md">
                      <NavbarBrand href="/" className='text-white font-weight-bold'>HBT</NavbarBrand>
                      <NavbarToggler onClick={toggle} />
                      <Collapse isOpen={isOpen} navbar>
                          <ul className='navbar-nav ml-auto'>
                              <li className='nav-item'><Link to="/" className='nav-link mx-1 py-4 px-4 navLink text-white'>Home</Link></li>
                              <li className='nav-item'><Link to="/about" className='nav-link mx-1 py-4 px-4 navLink text-white'>About</Link></li>
                              <li className='nav-item '><Link to="/contact" className='nav-link text-white py-4 px-4 navLink'>Contact</Link></li>
                          </ul>
                      </Collapse>
                  </Navbar>
              </div>
          </div>
        </div>
    );
};

export default NavbarHotel;
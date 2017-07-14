import React from 'react';
import { Navbar,Nav,NavItem,Image } from 'react-bootstrap';

import './Navbar.scss'

const NavbarHeader = () => {
  return (
    <div className="header">
      <Navbar>      
        <Navbar.Brand>
            <Image src="assets/images/logo.png"/>
        </Navbar.Brand>       

        <Navbar.Collapse>   
          <Nav pullRight>
            <NavItem  href="#">TH</NavItem>
            <NavItem  href="#" className="nav-right">EN</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
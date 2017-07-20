import React from 'react';
import { Navbar, Image } from 'react-bootstrap';

import './Navbar.scss';

const NavbarHeader = ({ onChangeLang }) => {
  return (
    <div className="header">
      <Navbar>      
        <Navbar.Brand>
            <Image src="assets/images/Common/logoHobbiz.png"/>           
        </Navbar.Brand>       
        <div className="navMenu">  
          <a className="active" href="#" onClick={(e) => onChangeLang(e, 'th')}>th</a>
          <span>|</span>
          <a href="#" onClick={(e) => onChangeLang(e, 'en')}>en</a> 
        </div>
       
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
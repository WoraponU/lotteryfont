import React from 'react';
import { Navbar, Image, Col } from 'react-bootstrap';
import { Menu } from 'Containers/common'

import './Navbar.scss';

const NavbarComponent = ({ onChangeLang, match: { params: { lang } } }) => {
  return (
    <div className="header">
      <Navbar collapseOnSelect>      
        <Navbar.Brand>
            <Image src="/assets/images/common/logoHobbiz.png"/>           
        </Navbar.Brand>   
         <Navbar.Toggle />    

        
         
         <Col lgHidden mdHidden>
            <Menu />
          </Col>
         <Navbar.Collapse>
          
           <div className="navMenu">  
          <a href="#" className={lang === 'th' ? 'active' : ''} onClick={(e) => onChangeLang(e, 'th')}>th</a>
          <span>|</span>
          <a href="#" className={lang === 'en' ? 'active' : ''} onClick={(e) => onChangeLang(e, 'en')}>en</a> 
        </div> 
        
        </Navbar.Collapse>
     
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
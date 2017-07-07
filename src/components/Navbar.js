import React from 'react';

import { Navbar,Nav,NavItem,Image } from 'react-bootstrap';
import styles from './Navbar.scss'

const NavbarHeader = () => {
  return (
    <div className={styles.header}>
      <Navbar className={styles.navbarDefault}>
        <Navbar.Header>
          <Navbar.Brand>
              <Image src="assets/images/logo.png" className={styles.Brand}/>
          </Navbar.Brand>
        </Navbar.Header>

        <Navbar.Collapse>   
          <Nav pullRight>
            <NavItem  href="#">TH</NavItem>
            <NavItem  href="#">EN</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
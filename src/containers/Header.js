import React, { Component } from 'react';
import styles from './Header.scss'
import { Navbar,Nav,NavItem,Image } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
     <header className={styles.header}>
      <Navbar className={styles.navbarDefault}>
        <Navbar.Header>
          <Navbar.Brand>
              <Image src="assets/images/logo.png" className={styles.Brand}/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>   
          <Nav pullRight>
            <NavItem  href="#">TH</NavItem>
            <NavItem  href="#">EN</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
    );
  }
}

export default Header;


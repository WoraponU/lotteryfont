import React, { Component } from 'react';
import styles from './Header.scss'
import { Navbar,Nav,NavItem,Image,Grid,Col,Row } from 'react-bootstrap';
import LiquidButton from 'Components/LiquidButton';


class Header extends Component {
  render() {
    return (
     <header className={styles.header}>
      <Navbar className={styles.navbarDefault}>
        <LiquidButton />
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
      
          <Grid>
    <Row className="show-grid">
        <Col sm={6} md={12} className={styles.position}>
        <Nav bsStyle="pills" stacked activeKey={1} >
          
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          
        </Nav>
        </Col>
         </Row>
  </Grid>
      
    </header>
    );
  }
}

export default Header;


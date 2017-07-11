import React from 'react';
import { Nav,NavItem,Grid,Col,Row } from 'react-bootstrap';

import styles from './Menu.scss'

const Menu = () => {
  return (
    <div>
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={6} className={styles.navBar}>
            <Nav bsStyle="pills" stacked className={styles.nav} >
              <NavItem eventKey={1} href="/" title="Item"><span>HOME</span></NavItem>
              <NavItem eventKey={2} href="/" title="Item"><span>OUR WORK</span></NavItem>
              <NavItem eventKey={3} href="/" title="Item"><span>ABOUT US</span></NavItem>
              <NavItem eventKey={4} href="/" title="Item"><span>OUR SERVICES</span></NavItem>
              <NavItem eventKey={5} href="/" title="Item"><span>OUR CLIENTS</span></NavItem>
              <NavItem eventKey={6} href="/" title="Item"><span>BLOG</span></NavItem>
              <NavItem eventKey={7} href="/" title="Item"><span>CONTACT US</span></NavItem>
            </Nav>
          </Col>
        </Row>
      </Grid>
    </div>  
  );
};

export default Menu;
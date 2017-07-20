import React from 'react';
import { Nav, NavItem, Grid, Col, Row } from 'react-bootstrap';

import './Menu.scss'

const Menu = ({ lang }) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={6} className="navBar">
          <Nav bsStyle="pills" stacked className="nav" >
            <NavItem eventKey={1} href="/" title="Item"><span>{ lang.home }</span></NavItem>
            <NavItem eventKey={2} href="/" title="Item"><span>{ lang.ourWork }</span></NavItem>
            <NavItem eventKey={3} href="/" title="Item"><span>{ lang.aboutUs }</span></NavItem>
            <NavItem eventKey={4} href="/" title="Item"><span>{ lang.client }</span></NavItem>
            <NavItem eventKey={5} href="/" title="Item"><span>{ lang.blog }</span></NavItem>
            <NavItem eventKey={6} href="/" title="Item"><span>{ lang.contact }</span></NavItem>
            <NavItem eventKey={7} href="/" title="Item"><span>{ lang.career }</span></NavItem>
          </Nav>
        </Col>
      </Row>
    </Grid>
  );
};

export default Menu;
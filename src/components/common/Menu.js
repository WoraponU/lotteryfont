import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Col, Row, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './Menu.scss'

const Menu = ({ lang, match: { params: { lang: paramLang } } }) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={6} className="navBar">
          <Nav>
             <NavLink to={`/${paramLang}`} activeClassName="active"><span>{ lang.home }</span></NavLink>
            <NavLink to={`/${paramLang}/our-work`} activeClassName="active"><span>{ lang.ourWork }</span></NavLink>
            <NavLink to={`/${paramLang}/about-us`} activeClassName="active"><span>{ lang.aboutUs }</span></NavLink>
            <NavLink to={`/${paramLang}/client`} activeClassName="active"><span>{ lang.client }</span></NavLink>
            <NavLink to={`/${paramLang}/blog`} activeClassName="active"><span>{ lang.blog }</span></NavLink>
            <NavLink to={`/${paramLang}/contact`} activeClassName="active"><span>{ lang.contact }</span></NavLink>
            <NavLink to={`/${paramLang}/career`} activeClassName="active"><span>{ lang.career }</span> </NavLink> 
          </Nav>
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(Menu);
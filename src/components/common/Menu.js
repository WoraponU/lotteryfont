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
          <Nav bsStyle="pills" stacked className="nav" >
            <li><NavLink to={`/${paramLang}`} activeClassName="active"><span>{ lang.home }</span></NavLink></li>
            <li><NavLink to={`/${paramLang}/our-work`} activeClassName="active"><span>{ lang.ourWork }</span></NavLink></li>
            <li><NavLink to={`/${paramLang}/about-us`} activeClassName="active"><span>{ lang.aboutUs }</span></NavLink></li>
            <li><NavLink to={`/${paramLang}/client`} activeClassName="active"><span>{ lang.client }</span></NavLink></li>
            <li><NavLink to={`/${paramLang}/blog`} activeClassName="active"><span>{ lang.blog }</span></NavLink></li>
            <li><NavLink to={`/${paramLang}/contact`} activeClassName="active"><span>{ lang.contact }</span></NavLink></li>
            <li><NavLink to={`/${paramLang}/career`} activeClassName="active"><span>{ lang.career }</span></NavLink> </li>
          </Nav>
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(Menu);
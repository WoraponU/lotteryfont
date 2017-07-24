import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './Menu.scss'

const Menu = ({ lang, match: { params: { lang: paramLang } } }) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={6} className="navBar">
          <NavLink to={`/${paramLang}`} activeClassName="active">{ lang.home }</NavLink>
          <NavLink to={`/${paramLang}/our-work`} activeClassName="active">{ lang.ourWork }</NavLink>
          <NavLink to={`/${paramLang}/about-us`} activeClassName="active">{ lang.aboutUs }</NavLink>
          <NavLink to={`/${paramLang}/client`} activeClassName="active">{ lang.client }</NavLink>
          <NavLink to={`/${paramLang}/blog`} activeClassName="active">{ lang.blog }</NavLink>
          <NavLink to={`/${paramLang}/contact`} activeClassName="active">{ lang.contact }</NavLink>
          <NavLink to={`/${paramLang}/career`} activeClassName="active">{ lang.career }</NavLink> 
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(Menu);
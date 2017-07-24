import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './Menu.scss'

// const Menu = ({ lang, match: { params: { lang: paramLang } } }) => {
const Menu = ({ lang, match: { url } }) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={6} className="navBar">
          <NavLink to={`${url}`} activeClassName="active">{ lang.home }</NavLink>
          <NavLink to={`${url}/our-work`} activeClassName="active">{ lang.ourWork }</NavLink>
          <NavLink to={`${url}/about-us`} activeClassName="active">{ lang.aboutUs }</NavLink>
          <NavLink to={`${url}/client`} activeClassName="active">{ lang.client }</NavLink>
          <NavLink to={`${url}/blog`} activeClassName="active">{ lang.blog }</NavLink>
          <NavLink to={`${url}/contact`} activeClassName="active">{ lang.contact }</NavLink>
          <NavLink to={`${url}/career`} activeClassName="active">{ lang.career }</NavLink>
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(Menu);
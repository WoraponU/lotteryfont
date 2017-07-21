import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';

import './Menu.scss'

const Menu = ({ lang }) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={6} className="navBar">
          <NavLink to={'/'} activeClassName="active">{ lang.home }</NavLink>
          <NavLink to={'/our-work'} activeClassName="active">{ lang.ourWork }</NavLink>
          <NavLink to={'/about-us'} activeClassName="active">{ lang.aboutUs }</NavLink>
          <NavLink to={'/client'} activeClassName="active">{ lang.client }</NavLink>
          <NavLink to={'/blog'} activeClassName="active">{ lang.blog }</NavLink>
          <NavLink to={'/contact'} activeClassName="active">{ lang.contact }</NavLink>
          <NavLink to={'/career'} activeClassName="active">{ lang.career }</NavLink>
        </Col>
      </Row>
    </Grid>
  );
};

export default Menu;
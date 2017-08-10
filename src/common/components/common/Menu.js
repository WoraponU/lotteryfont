import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './Menu.scss'

const Menu = ({ lang, match: { params: { lang: paramLang } } }) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={6} className="navBar" >
          <ul>
            <li><NavLink exact to={`/${paramLang}`} activeClassName="active"><span>{ lang.home }</span></NavLink> </li>
            <li><NavLink to={`/${paramLang}/aboutUs`} activeClassName="active"><span>{ lang.aboutUs }</span></NavLink></li>
            <li><NavLink to={`/${paramLang}/our-work`} activeClassName="active"><span>{ lang.ourWork }</span></NavLink></li>
            <li><a disabled className="disabled"><span>{ lang.client }</span></a></li>
            <li><a disabled className="disabled"><span>{ lang.blog }</span></a></li>
            <li><NavLink to={`/${paramLang}/contact`} activeClassName="active"><span>{ lang.contact }</span></NavLink></li>
            <li><a disabled className="disabled"><span>{ lang.career }</span></a></li>  
          </ul>
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(Menu);
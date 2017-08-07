import React from 'react';
// import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import { Grid, Col, Row,Nav,NavItem,Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './Menu.scss'

const Menu = ({ lang, match: { params: { lang: paramLang } } }) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={6} className="navBar">
        <Navbar.Collapse>
          <Nav  stacked className="text-right" >
            <LinkContainer  exact to={`/${paramLang}`} activeClassName="active"><NavItem ><span>{ lang.home }</span></NavItem></LinkContainer>
            <LinkContainer to={`/${paramLang}/aboutUs`} activeClassName="active"><NavItem ><span>{ lang.aboutUs }</span></NavItem></LinkContainer>  

            <LinkContainer to={`/${paramLang}/our-work`} activeClassName="active"><NavItem ><span>{ lang.ourWork }</span></NavItem></LinkContainer>  

            {/* <LinkContainer to={`/${paramLang}`} activeClassName="active"><NavItem ><span>{ lang.client }</span></NavItem></LinkContainer>  

            <LinkContainer to={`/${paramLang}`} activeClassName="active"><NavItem ><span>{ lang.blog }</span></NavItem></LinkContainer>   */}

            <LinkContainer to={`/${paramLang}/contact`} activeClassName="active"><NavItem ><span>{ lang.contact }</span></NavItem></LinkContainer>  

            {/* <LinkContainer to={`/${paramLang}`} activeClassName="active"><NavItem ><span>{ lang.career }</span></NavItem></LinkContainer>   */}

          </Nav>
        </Navbar.Collapse>
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(Menu);
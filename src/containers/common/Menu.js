import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Nav, NavItem, Grid, Col, Row } from 'react-bootstrap';

import { withLang } from '../../hocs';

import './Menu.scss'

class Menu extends Component {
  render() {
    const { lang } = this.props;
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={6} className="navBar">
            <Nav bsStyle="pills" stacked className="nav" >
              <NavItem eventKey={1} href="/" title="Item"><span>{ lang.home }</span></NavItem>
              <NavItem eventKey={2} href="/" title="Item"><span>{ lang.ourWork }</span></NavItem>
              <NavItem eventKey={3} href="/" title="Item"><span>{ lang.aboutUs }</span></NavItem>
              <NavItem eventKey={4} href="/" title="Item"><span>{ lang.ourService }</span></NavItem>
              <NavItem eventKey={5} href="/" title="Item"><span>{ lang.ourClient }</span></NavItem>
              <NavItem eventKey={6} href="/" title="Item"><span>{ lang.blog }</span></NavItem>
              <NavItem eventKey={7} href="/" title="Item"><span>{ lang.contactUs }</span></NavItem>
            </Nav>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const enhance = compose(
  connect(
    ({ lang: nextLang }) => ({
      nextLang
    })
  ),
  withLang('Menu')
);

export default enhance(Menu);


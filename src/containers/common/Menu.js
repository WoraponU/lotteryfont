import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Nav, NavItem, Grid, Col, Row } from 'react-bootstrap';

import './Menu.scss'

const homeTh = require('../../langs/th/home/Menu.json');
const homeEng = require('../../langs/en/home/Menu.json');

class Menu extends Component {
  constructor() {
    super();

    this.content = {
      th: homeTh,
      en: homeEng,
    } 
  }

  state = {
    content: homeTh,
  }

  componentWillReceiveProps({ nextLang }) {
    const { nextLang: { lang: currentLang } } = this.props;

    if (nextLang.lang !== currentLang ) {
      this.setState({ 
        content: this.content[nextLang.lang], 
      })    
    }
  }

  render() {
    const { content } = this.state;
    return (
      <Grid>
        
        <Row className="show-grid">
          <Col sm={6} md={6} className="navBar">
            <Nav bsStyle="pills" stacked className="nav" >
              <NavItem eventKey={1} href="/" title="Item"><span>{ content.home }</span></NavItem>
              <NavItem eventKey={2} href="/" title="Item"><span>{ content.ourWork }</span></NavItem>
              <NavItem eventKey={3} href="/" title="Item"><span>{ content.aboutUs }</span></NavItem>
              <NavItem eventKey={4} href="/" title="Item"><span>{ content.ourService }</span></NavItem>
              <NavItem eventKey={5} href="/" title="Item"><span>{ content.ourClient }</span></NavItem>
              <NavItem eventKey={6} href="/" title="Item"><span>{ content.blog }</span></NavItem>
              <NavItem eventKey={7} href="/" title="Item"><span>{ content.contactUs }</span></NavItem>
            </Nav>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(
  ({ lang: nextLang }) => ({
    nextLang
  })
)(Menu)
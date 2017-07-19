import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeLang } from 'Actions'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

import './Navbar.scss'

const homeTh = require('../../langs/th/home.json');
const homeEng = require('../../langs/en/home.json');

class NavbarHeader extends Component {
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

  onChangeLang = event => {
    const { value } = event.target;

    this.props.changeLang(value);
  }

  componentWillReceiveProps({ nextLang }) {
    const { nextLang: { lang: currentLang } } = this.props;

    if (nextLang.lang !== currentLang ) {
      this.setState({ 
        lang: nextLang.lang,
        content: this.content[nextLang.lang], 
      })    
    }
  }
  render() {
    const { content, lang } = this.state;
    return (
      <div className="header">
        { content.home } <br/> { content.title }
        <Navbar>      
          <Navbar.Brand>
            <Image src="assets/images/logo.png"/>
          </Navbar.Brand>       

          <Navbar.Collapse>   
            <Nav pullRight>
              <NavItem  href="#">TH</NavItem>
              <NavItem  href="#" className="nav-right">EN</NavItem>
              <input type='button' name='lang' onClick={this.onChangeLang} value='th' />
              <input type='button' name='lang' onClick={this.onChangeLang} value='en' />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(
  ({ lang: nextLang }) => ({
    nextLang
  }),
  { changeLang }
)(NavbarHeader)
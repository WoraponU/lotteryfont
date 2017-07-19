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

  onChangeLang = (event, lang) => {
    event.preventDefault();
    this.props.changeLang(lang);
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
    const { content } = this.state;
    return (
      <div className="header">
        { content.home } <br/> { content.title }
        <Navbar>      
          <Navbar.Brand>
            <Image src="assets/images/logo.png"/>
          </Navbar.Brand>       

          <Navbar.Collapse>   
            <a href="#" onClick={(e) => this.onChangeLang(e, 'th')}>th</a>|
            <a href="#" onClick={(e) => this.onChangeLang(e, 'en')}>en</a>
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
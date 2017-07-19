import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeLang } from 'Actions'
import { Navbar, Image } from 'react-bootstrap';

import './Navbar.scss';

class NavbarHeader extends Component {
  onChangeLang = (event, lang) => {
    event.preventDefault();
    this.props.changeLang(lang);
  }

  render() {
    return (
      <div className="header">
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
  null,
  {changeLang}
)(NavbarHeader)
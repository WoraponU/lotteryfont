import React, { Component } from 'react';
import { Menu, Navbar } from 'Components'

class Header extends Component {
  render() {
    return (
     <header>
      <Navbar />
      <Menu />
    </header>
    );
  }
}

export default Header;


import React, { Component } from 'react';
import { Menu } from 'Components/common'
import { Navbar } from 'Containers/common'

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


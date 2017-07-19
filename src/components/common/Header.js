import React, { Component } from 'react';

import { Navbar, Menu } from 'Containers/common'

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


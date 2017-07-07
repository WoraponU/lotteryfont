import React, { Component } from 'react';

import { Menu,NavbarHeader } from 'Components'



class Header extends Component {
  render() {
    return (
     <header>
      <NavbarHeader />
      <Menu />
    </header>
    );
  }
}

export default Header;


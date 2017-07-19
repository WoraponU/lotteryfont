import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeLang } from 'Actions'

import { NavbarComponent } from 'Components/common';

class NavbarHeader extends Component {
  onChangeLang = (event, lang) => {
    event.preventDefault();
    this.props.changeLang(lang);
  }

  render() {
    return (
      <NavbarComponent onChangeLang={this.onChangeLang}/>
    );
  }
}

export default connect(
  null,
  {changeLang}
)(NavbarHeader)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeLang } from 'Actions'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'


import { NavbarComponent } from 'Components/common';

class NavbarHeader extends Component {
  onChangeLang = (event, lang) => {
    const { changeLang, history, location: { search, pathname } } = this.props;
    const newPathname = pathname.replace(/\/(th|en)/, '');

    changeLang(lang); 
    event.preventDefault();

    history.push({
      pathname: `${lang}${newPathname}`,
      search: `${search}`,
    })
  }

  render() {
    return (
      <NavbarComponent onChangeLang={this.onChangeLang}/>
    );
  }
}

const enhance = compose(
  connect(
    null,
    {changeLang}
  ),
  withRouter
);

export default enhance(NavbarHeader);


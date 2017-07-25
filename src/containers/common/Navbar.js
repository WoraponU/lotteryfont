import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'


import { NavbarComponent } from 'Components/common';

class NavbarHeader extends Component {
  onChangeLang = (event, lang) => {
    event.preventDefault();
    
    const { history, location: { search, pathname } } = this.props;
    const newPathname = pathname.replace(/\/(th|en)/, '');
    history.push({
      pathname: `/${lang}${newPathname}`,
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
  withRouter
);

export default enhance(NavbarHeader);


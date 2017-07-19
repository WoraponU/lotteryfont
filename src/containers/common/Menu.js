import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { MenuComponent } from 'Components/common';
import { withLang } from '../../hocs';

class Menu extends Component {
  render() {
    const { lang } = this.props;
    return (
      <MenuComponent lang={lang}/>
    );
  }
}

const enhance = compose(
  connect(
    ({ lang: nextLang }) => ({
      nextLang
    })
  ),
  withLang('Menu')
);

export default enhance(Menu);


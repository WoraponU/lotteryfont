import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

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
  withRouter,
  withLang('common/Menu')
);

export default enhance(Menu);


import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { Section5Component } from 'Components/homeSections'
import { withLang } from '../../hocs';

class Section5 extends Component {
  render() {
    const { lang } = this.props;

    return (
      <Section5Component lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('home/Section5')
);

export default enhance(Section5);
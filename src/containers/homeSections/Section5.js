import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'

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
  connect(
    ({ lang: nextLang }) => ({
      nextLang
    })
  ),
  withLang('home/Section5')
);

export default enhance(Section5);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { Section7Component } from 'Components/homeSections'
import { withLang } from '../../hocs';

class Section7 extends Component {
  render() {
    const { lang } = this.props;

    return (
      <Section7Component lang={lang} />
    );
  }
}

const enhance = compose(
  connect(
    ({ lang: nextLang }) => ({
      nextLang
    })
  ),
  withLang('home/Section7')
);

export default enhance(Section7);
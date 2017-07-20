import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { Section3Component } from 'Components/homeSections'
import { withLang } from '../../hocs';

class Section3 extends Component {
  render() {
    const { lang } = this.props;

    return (
      <Section3Component lang={lang} />
    );
  }
}

const enhance = compose(
  connect(
    ({ lang: nextLang }) => ({
      nextLang
    })
  ),
  withLang('home/Section3')
);

export default enhance(Section3);
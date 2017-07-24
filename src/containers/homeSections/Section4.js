import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { Section4Component } from 'Components/homeSections'
import { withLang } from '../../hocs';

class Section4 extends Component {
  render() {
    const { lang } = this.props;

    return (
      <Section4Component lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ lang: nextLang }) => ({
      nextLang
    })
  ),
  withLang('home/Section4')
);

export default enhance(Section4);
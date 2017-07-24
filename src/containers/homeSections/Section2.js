import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { Section2Component } from 'Components/homeSections'
import { withLang } from '../../hocs';

class Section2 extends Component {
  render() {
    const { lang } = this.props;

    return (
      <Section2Component lang={lang} />
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
  withLang('home/Section2')
);

export default enhance(Section2);
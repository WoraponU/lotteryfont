import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { Section1Component } from 'Components/homeSections'
import { withLang } from '../../hocs';


class Section1 extends Component {
  render() {
    const { lang } = this.props;
    
    return (
      <Section1Component lang={lang} />
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
  withLang('home/Section1')
);

export default enhance(Section1);


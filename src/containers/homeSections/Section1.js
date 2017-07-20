import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'

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
  connect(
    ({ lang: nextLang }) => ({
      nextLang
    })
  ),
  withLang('Home')
);

export default enhance(Section1);


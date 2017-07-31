import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { Section7Component } from 'Components/homeSections'
import { withLang } from 'Hocs';

class Section7 extends Component {
  render() {
    const { lang } = this.props;

    return (
      <Section7Component lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('home/Section7')
);

export default enhance(Section7);
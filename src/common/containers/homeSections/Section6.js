import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { Section6Component } from 'Components/homeSections'
import { withLang } from 'Hocs';

class Section6 extends Component {
  render() {
    const { lang } = this.props;

    return (
      <Section6Component lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('home/Section6')
);

export default enhance(Section6);
import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { Section3Component } from 'Components/homeSections'
import { withLang } from 'Hocs';

class Section3 extends Component {
  render() {
    const { lang } = this.props;

    return (
      <Section3Component lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('home/Section3')
);

export default enhance(Section3);
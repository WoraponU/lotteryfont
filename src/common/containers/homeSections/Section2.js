import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { checkUserAgent }  from 'Actions'
import { Section2Component } from 'Components/homeSections'
import { withLang, withUserAgent } from 'Hocs';

class Section2 extends Component {
  render() {
    const { lang, userAgent } = this.props;

    return (
      <Section2Component lang={lang} userAgent={userAgent}/>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ UserAgent: userAgent }) => ({
      isCheckUserAgent: userAgent.isCheckUserAgent,
      userAgent: userAgent.userAgent,
    }),
    { checkUserAgent }
  ),
  withLang('home/Section2'),
  withUserAgent(),
);

export default enhance(Section2);
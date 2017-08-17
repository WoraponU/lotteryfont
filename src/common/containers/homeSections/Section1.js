import React, { Component } from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { checkUserAgent }  from 'Actions'
import { Section1Component } from 'Components/homeSections'
import { withLang, withUserAgent } from 'Hocs';

class Section1 extends Component {
  render() {
    const { lang, userAgent } = this.props;
    
    return (
      <Section1Component lang={lang} userAgent={userAgent}/>
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
  withLang('home/Section1'),
  withUserAgent(),
);

export default enhance(Section1);


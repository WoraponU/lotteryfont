import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { OurMomComponent } from 'Components/aboutSections'
import { withLang } from 'Hocs';


class OurMom extends Component {
  render() {
    const { lang } = this.props;
    
    return (
      <OurMomComponent lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('about/OurMom')
);

export default enhance(OurMom);


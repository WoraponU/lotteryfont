import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { DrivenComponent } from 'Components/aboutSections'
import { withLang } from 'Hocs';


class Driven extends Component {
  render() {
    const { lang } = this.props;
    
    return (
      <DrivenComponent lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('about/Driven')
);

export default enhance(Driven);


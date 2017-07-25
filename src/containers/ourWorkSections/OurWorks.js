import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { OurWorksComponent } from 'Components/ourWorkSections'
import { withLang } from '../../hocs';


class OurWorks extends Component {
  render() {
    const { lang } = this.props;
    
    return (
      <OurWorksComponent lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('ourWorks/OurWorks')
);

export default enhance(OurWorks);


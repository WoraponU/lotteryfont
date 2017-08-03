import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { OurOfficeComponent } from 'Components/contactSections'
import { withLang } from 'Hocs';

class OurOffice extends Component {
  render() {
    const { lang } = this.props;

    return (
      <OurOfficeComponent lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('contact/OurOffice')
);

export default enhance(OurOffice);
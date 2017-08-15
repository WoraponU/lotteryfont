import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { ClientsComponent } from 'Components/clientsSections'
import { withLang } from 'Hocs';


class Clients extends Component {
  render() {
    const { lang } = this.props;
    
    return (
      <ClientsComponent lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('clients/Clients')
);

export default enhance(Clients);


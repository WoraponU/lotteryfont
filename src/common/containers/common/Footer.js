import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { FormContact, FormSubscribeComponent, FormFooter } from 'Components/common'
import { withLang } from 'Hocs';
import './Footer.scss';

class Footer extends Component {
  render() {
    const { lang } = this.props;
    return (
      <div>    
        <FormSubscribeComponent lang={lang} />
        <footer>
          <FormContact lang={lang} /> 
          <FormFooter lang={lang} />    
        </footer>   
      </div>
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('common/Footer')
);

export default enhance(Footer);

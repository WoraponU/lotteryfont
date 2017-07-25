import React, { Component } from 'react';
import scrollIntoView from 'scroll-into-view';
import Waypoint from 'react-waypoint';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { FormContact, FormSubscribeComponent, FormFooter } from 'Components/common'
import { withLang } from '../../hocs';

class Footer extends Component {
  state = {
    showFooter: false,
  }

  showFooter() {
    setTimeout(() => { 
      this.setState({ showFooter: true }, () => {
        const option = {
          time: 500,
        };
        scrollIntoView(this.footer, option);
      });
    }, 250);
  }

  hideFooter() {
    this.setState({ showFooter: false });
  }

  render() {
    const { lang } = this.props;

    return (
      <div>
        <Waypoint
          onEnter={this.showFooter.bind(this)}
          onLeave={this.hideFooter.bind(this)}
        >
          <div ref={(el) => { this.footer = el; }}>  
            <FormSubscribeComponent lang={lang} />
            { this.state.showFooter && <FormContact lang={lang} /> }
            { this.state.showFooter && <FormFooter lang={lang} /> } 
          </div>    
        </Waypoint>
      </div>
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('common/Footer')
);

export default enhance(Footer);

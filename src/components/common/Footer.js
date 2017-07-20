import React, { Component } from 'react';
import scrollIntoView from 'scroll-into-view';
import Waypoint from 'react-waypoint';

import { FormContact, FormSubscribe, FormFooter } from 'Components/common'

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
    return (
      <div>
        <Waypoint
          onEnter={this.showFooter.bind(this)}
          onLeave={this.hideFooter.bind(this)}
        >
          <div ref={(el) => { this.footer = el; }}>  
            <FormSubscribe />
            { this.state.showFooter && <FormContact /> }
            { this.state.showFooter && <FormFooter /> } 
          </div>    
        </Waypoint>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from 'react';

import Waypoint from 'react-waypoint';

import { Section1, Section2, Section3, Section4, Section5 } from 'Components/homeSections'

class Home extends Component {
  state = {
    showFooter: false,
  }

  toggleShowContent(isShow) {
    this.setState({ showFooter: isShow });
  }

  /**
   * @return {Object}
   */
  _renderMessage() {
    if (!this.state.message) {
      return;
    }

    return (
      <div className="basic-example__message">
          {this.state.message}
      </div>
    );
  }

  render() {
    return (
      <div>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          
          <Waypoint
            onEnter={this.toggleShowContent.bind(this, true)}
            onLeave={this.toggleShowContent.bind(this, false)}
          >
            <div>enter
              {
                this.state.showFooter &&
                <Section5 />                
              }      
            </div>    
          </Waypoint>
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import scrollIntoView from 'scroll-into-view';
import Waypoint from 'react-waypoint';

import { Section1, Section2, Section3, Section4, Section5 } from 'Components/homeSections'

class Home extends Component {
  state = {
    showFooter: false,
  }

  toggleShowContent(isShow) {
    if (isShow) {
      setTimeout(() => { 
        this.setState({ showFooter: isShow }, () => {
          const option = {
            time: 250,
          };
          scrollIntoView(this.footer, option);
        });
        
      }, 250);
      
    }
    else {
      this.setState({ showFooter: isShow });
    }
    
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
            <div ref={(el) => { this.footer = el; }}>footer
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
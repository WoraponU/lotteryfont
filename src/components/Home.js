import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom'

import Waypoint from 'react-waypoint';

import { Section1, Section2, Section3, Section4, Section5 } from 'Components/homeSections'

class Home extends Component {
  state = {
    showFooter: false,
  }

scrollToBottom  ()  {
  const node = ReactDOM.findDOMNode(this.messagesEnd);

  node.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'end' 
  });
   // ReactDOM.findDOMNode(this).scrollTop = 0
}

  toggleShowContent(isShow) {
    if (isShow) {
      setTimeout(() => { 
        this.setState({ showFooter: isShow }, () => {
          this.scrollToBottom();
        });
        
      }, 500);
      
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
            <div ref={(el) => { this.messagesEnd = el; }}>enter
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
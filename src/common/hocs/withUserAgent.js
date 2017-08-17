import React, { Component } from 'react'

import MobileDetect from 'mobile-detect';

const withUserAgent = (propName) => (WrappedComponent) => {
  return class extends Component {
    state = {
      userAgent: ''
    }

    componentDidMount() {
      const { checkUserAgent } = this.props;

      const md = new MobileDetect(window.navigator.userAgent);
      const userAgentChecked = {
        isDesktop: !md.mobile(),
        isPhone: !!md.phone(),
        isTablet: !!md.tablet(),
      }
      checkUserAgent(userAgentChecked);  
    }

    componentWillReceiveProps({ isCheckUserAgent, userAgent }) {
      if (isCheckUserAgent) {
        this.setState({ 
          userAgent, 
        }) 
      }
    }
    
    render() {
      return <WrappedComponent {...this.props} userAgent={this.state.userAgent}/>
    }
  }
}

export default withUserAgent

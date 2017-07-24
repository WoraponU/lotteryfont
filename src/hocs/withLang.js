import React, { Component } from 'react'

const withLang = (propName) => (WrappedComponent) => {
  const contentTh = require(`../langs/th/${propName}.json`);
  const contentEn = require(`../langs/en/${propName}.json`);
  
  return class extends Component {
    constructor() {
      super();

      this.content = {
        th: contentTh,
        en: contentEn,
      } 
    }

    state = {
      content: contentTh,
    }

    // componentDidUpdate
    componentWillReceiveProps({ nextLang }) {
      console.log(this.props.match);
      const { nextLang: { lang: currentLang } } = this.props;

      if (nextLang.lang !== currentLang ) {
        this.setState({ 
          content: this.content[nextLang.lang], 
        })    
      }
    }
    
    render() {
      return <WrappedComponent {...this.props} lang={this.state.content}/>
    }
  }
}

export default withLang
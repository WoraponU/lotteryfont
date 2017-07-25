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

    manageLang(lang) {
      this.setState({ 
        content: this.content[lang], 
      }) 
    }

    componentDidMount() {
      const { match: { params: { lang: nextLang } } } = this.props;

      this.manageLang(nextLang);
    }

    componentWillReceiveProps({ match: { params: { lang: nextLang } } }) {
      const { match: { params: { lang: currentLang } } } = this.props;

      if (currentLang !== nextLang ) {
        this.manageLang(nextLang);
      }
      
    }
    
    render() {
      return <WrappedComponent {...this.props} lang={this.state.content}/>
    }
  }
}

export default withLang
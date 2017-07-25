import React, { Component } from 'react'

const withLang = (propName) => (WrappedComponent) => {
  const contentTh = require(`../langs/th/${propName}.json`);
  
  return class extends Component {
    constructor() {
      super();

      this.content = {
        th: contentTh,
      } 
    }

    state = {
      content: contentTh,
      isLoadedContentEn: false,
    }

    manageLang(lang) {
      const { isLoadedContentEn } = this.state

      if (!isLoadedContentEn && lang === 'en') {
        const loadContentEn = new Promise((resolve, reject) => {
          require([`../langs/en/${propName}.json`], (resp, err) => {
            if (!!err) reject(err);
            resolve(resp);
          });
        });

        loadContentEn.then((contentEn) => {
          this.content.en = contentEn;
          
          this.setState({ 
            content: this.content[lang], 
          })    
        });
      } else {
        this.setState({ 
          content: this.content[lang], 
        })    
      }


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
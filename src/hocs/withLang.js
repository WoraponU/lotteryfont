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

    // componentDidUpdate({ nextLang: { lang: currentLang } }, prevState) {
    //   const { match: { params: { lang: nextLang } } } = this.props;
    //   console.log('currentLang:' ,currentLang);
    //   console.log('nextLang:' ,nextLang);
    //   // if (currentLang !== nextLang ) {
    //   // console.log('nextLang:' ,nextLang);
        
    //     // this.setState({ 
    //     //   content: this.content[nextLang], 
    //     // })   

    //   // }
    // }
    componentDidMount() {
      const { match: { params: { lang: nextLang } } } = this.props;
      
      this.setState({ 
        content: this.content[nextLang], 
      })    
    }
    
    componentWillReceiveProps({ nextLang }) {
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
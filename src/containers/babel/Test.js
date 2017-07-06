// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { changeLang } from 'Actions'


// const homeTh = require('../translates/th/home.json');
// const homeEng = require('../translates/en/home.json');

// class Test extends Component {
//   constructor() {
//     super();

//     this.content = {
//       th: homeTh,
//       en: homeEng,
//     } 
//   }

//   state = {
//     content: homeTh,
//   }

//   onClick = event => {
//     const { value } = event.target;

//     this.props.changeLang(value);
//   }

//   componentWillReceiveProps({ nextLang }) {
//     const { nextLang: { lang: currentLang } } = this.props;

//     if (nextLang.lang !== currentLang ) {
//       this.setState({ 
//         lang: nextLang.lang,
//         content: this.content[nextLang.lang], 
//       })    
//     }
//   }

//   render() {
//     const { content, lang } = this.state;
//     return (
//       <div>
//         {lang}
//         { content.home } <br/> { content.title }
//         <input type='button' name='lang' onClick={this.onClick} value='th' />
//         <input type='button' name='lang' onClick={this.onClick} value='en' />
//       </div>
//     );
//   }
// }

// export default connect(
//   ({ lang: nextLang }) => ({
//     nextLang
//   }),
//   { changeLang }
// )(Test)
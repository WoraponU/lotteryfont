import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { WeAreTeamComponent } from 'Components/aboutSections'
import { withLang } from 'Hocs';


class WeAreTeam extends Component {
  
  state = {
    contentLoaded: {
      imgPath: '',
      title: '',
      name: '', 
      rank: '',
    }   
  }

   componentWillReceiveProps({ match: { params: { id, lang } } }) {
    const tempContent = [
     {
       th:{
        imgPath: 'yuki',
        title: 'test',
        name: 'nametest', 
        rank: 'boss',
       },
       en:{
        imgPath: 'yuki',
        title: 'เทส',
        name: '1234', 
        rank: 'โหลเทส',
       }
     },
       {
       th:{
        imgPath: 'cat',
        title: 'cat',
        name: 'cattttt', 
        rank: 'bcacacaaoss',
       },
       en:{
        imgPath: 'cat',
        title: 'เทสแมว',
        name: '1234แมว', 
        rank: 'โหลเทสแมว',
       }
     }
    ]

    this.setState({ 
      contentLoaded: tempContent[lang],
    }) 
  }


  render() {
    const { lang } = this.props;
    const { contentLoaded } = this.state;
    
    return (
      <WeAreTeamComponent lang={lang} contentLoaded={contentLoaded} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('about/WeAreTeam')
);

export default enhance(WeAreTeam);


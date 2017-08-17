import React, { Component } from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { checkUserAgent }  from 'Actions'
import { Section1Component } from 'Components/homeSections'
import { withLang, withUserAgent } from 'Hocs';

class Section1 extends Component {
  componentDidMount() {
    axios.get('http://localhost:3000/api/mail/test')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const { lang, userAgent } = this.props;
    
    return (
      <Section1Component lang={lang} userAgent={userAgent}/>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ UserAgent: userAgent }) => ({
      isCheckUserAgent: userAgent.isCheckUserAgent,
      userAgent: userAgent.userAgent,
    }),
    { checkUserAgent }
  ),
  withLang('home/Section1'),
  withUserAgent(),
);

export default enhance(Section1);


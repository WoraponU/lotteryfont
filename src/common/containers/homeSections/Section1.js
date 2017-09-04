import React, { Component } from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { checkUserAgent }  from 'Actions'
import { Section1Component } from 'Components/homeSections'
import { withLang, withUserAgent } from 'Hocs';

class Section1 extends Component {
  state = {
    count: 0,
    isAccess: false
  }
  componentDidMount() {
    const statusToAccess = this.getStatusToAccess();

    statusToAccess    
    .then(function (response) {
      alert('เข้าได้');
    })
    .catch(function (error) {
      console.log('eiei');

      this.getStatusToAccess();
    });
  }

  getStatusToAccess = () => {
    return axios.get('http://localhost:3000/api/mail/test')
  }

  render() {
    const { lang, userAgent } = this.props;
    
    return (
      <div>jfkdslafjkdls;afjdksl;{this.state.count}</div>
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


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
    attempToAccess: 0,
    isAccessSuccess: false
  }

  updateStatus = (status) => {
    const { attempToAccess } = this.state;
    this.setState({
      isAccessSuccess: (status === 'success') ? true : false,
      attempToAccess
    }, () => {
      const { attempToAccess, isAccessSuccess } = this.state

      if (!isAccessSuccess) {
        const statusToAccess = this.getStatusToAccess();
    
        statusToAccess    
        .then((response) => {
          return this.updateStatus('success')
        })
        .catch((error) => {
          this.setState({
            isAccessSuccess: isAccessSuccess,
            attempToAccess: attempToAccess + 1
          })
          return this.updateStatus('fail')
        });
      }
    })
  }

  getStatusToAccess = () => {
    return axios.get('http://localhost:3000/api/mail/test')
  }

  componentDidMount() {
    const statusToAccess = this.getStatusToAccess();

    statusToAccess    
    .then((response) => {
      return this.updateStatus('success')
    })
    .catch((error) => {
      return this.updateStatus('fail')
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { isAccessSuccess: prevIsAccessSuccess } = prevState;
    const { isAccessSuccess } = this.state;
    if (prevIsAccessSuccess !== isAccessSuccess) {
      if (isAccessSuccess) {
        alert('yeah');
      }
    }    
    // if (prevIsAccessSuccess === isAccessSuccess) {
    //   console.log('false');
    
    //   this.setState({
    //     isAccessSuccess: isAccessSuccess,
    //     attempToAccess: attempToAccess + 1
    //   })
    // } else {
    //   console.log('success');
    // }
   
    // const statusToAccess = this.getStatusToAccess();

    // statusToAccess    
    // .then((response) => {
    //   return this.updateStatus('success')
    // })
    // .catch((error) => {
    //   return this.updateStatus('fail')
    // });
    // }
  }

  render() {
    
    return (
      <div>
        {this.state.attempToAccess}
      </div>
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


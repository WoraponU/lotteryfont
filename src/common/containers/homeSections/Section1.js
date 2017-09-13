import React, { Component } from 'react';
import axios from 'axios'

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
        window.open('https://pantip.com/topic/36774680');
      }
    }    
  }

  render() {
    return (
      <div>
        {this.state.attempToAccess}
      </div>
    );
  }
}


export default Section1;


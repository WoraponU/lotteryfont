import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { postMailContactUsRequest, postMailContactUsSuccess }  from 'Actions'
import { Section7Component } from 'Components/homeSections'
import { withLang } from 'Hocs';

class Section7 extends Component {
  state = {
    showAlert: false,
  }

  OnPostMailContactUs = (value) => {
    const { postMailContactUsRequest, postMailContactUsSuccess } = this.props;
    
    postMailContactUsRequest();

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/mail/send-mail',
    })
    .then((resp) => {
      postMailContactUsSuccess();
    });
  }
  
  hideAlert = () => {
    this.setState({ showAlert: false });    
  }

  componentWillReceiveProps({ isPostMailContactUsSuccess }) {
    this.setState({ showAlert: isPostMailContactUsSuccess });        
  }

  render() {
    const { showAlert } = this.state
    return (
      <Section7Component {...this.props} hideAlert={this.hideAlert} showAlert={showAlert} OnPostMailContactUs={this.OnPostMailContactUs} />
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ Mail: mail }) => ({
      isPostingMailContactUs: mail.isPostingMailContactUs,
      isPostMailContactUsSuccess: mail.isPostMailContactUsSuccess
    }),
    { postMailContactUsRequest, postMailContactUsSuccess }
  ),
  withLang('home/Section7')
);

export default enhance(Section7);
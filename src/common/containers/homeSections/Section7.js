import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { postMailContactUsRequest, postMailContactUsSuccess, postMailContactUsFailure }  from 'Actions'
import { Section7Component } from 'Components/homeSections'
import { withLang } from 'Hocs';

class Section7 extends Component {
  state = {
    alertPopup: {
      isShow: false,
      type: 'default',
    },
  }

  OnPostMailContactUs = (value) => {
    const { postMailContactUsRequest, postMailContactUsSuccess, postMailContactUsFailure } = this.props;
    
    postMailContactUsRequest();

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/mail/send-mail',
    })
    .then((resp) => {
      postMailContactUsSuccess();
    })
    .catch((err) => {
      postMailContactUsFailure();
    });
  }
  
  hideAlert = () => {
    this.setState({ alertPopup: { isShow: false } });    
  }

  componentWillReceiveProps({ isPostMailContactUsSuccess, isPostMailContactUsFailure }) {
    const { isPostMailContactUsSuccess: isCurrentPostMailContactUsSuccess, isPostMailContactUsFailure: isCurrentPostMailContactUsFailure } = this.props;
    
    if (isPostMailContactUsSuccess && (isCurrentPostMailContactUsSuccess!== isPostMailContactUsSuccess)) {
      console.log('success');
      this.setState({ 
        alertPopup: { 
          isShow: isPostMailContactUsSuccess,
          type: 'success',
        } 
      });   
    }
    if (isPostMailContactUsFailure && (isCurrentPostMailContactUsFailure!== isPostMailContactUsFailure)) {
      console.log('danger');
      
      this.setState({ 
        alertPopup: { 
          isShow: isPostMailContactUsFailure,
          type: 'danger',
        } 
      });   
    }
  }

  render() {
    const { alertPopup } = this.state
    return (
      <Section7Component {...this.props} hideAlert={this.hideAlert} alertPopup={alertPopup} OnPostMailContactUs={this.OnPostMailContactUs} />
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ Mail: mail }) => ({
      isPostingMailContactUs: mail.isPostingMailContactUs,
      isPostMailContactUsSuccess: mail.isPostMailContactUsSuccess,
      isPostMailContactUsFailure: mail.isPostMailContactUsFailure
    }),
    { postMailContactUsRequest, postMailContactUsSuccess, postMailContactUsFailure }
  ),
  withLang('home/Section7')
);

export default enhance(Section7);
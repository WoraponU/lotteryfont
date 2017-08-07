import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { postMailContactUs }  from 'Actions'
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
    const { postMailContactUs } = this.props;
    postMailContactUs();
  }
  
  hideAlert = () => {
    this.setState({ alertPopup: { isShow: false } });    
  }

  componentWillReceiveProps({ isPostMailContactUsSuccess: isNextPostMailContactUsSuccess, isPostMailContactUsFailure: isNextPostMailContactUsFailure }) {
    if (!!isNextPostMailContactUsSuccess && isNextPostMailContactUsSuccess) {
      this.setState({ 
        alertPopup: { 
          isShow: isNextPostMailContactUsSuccess,
          type: 'success',
        } 
      });   
    }
    if (!!isNextPostMailContactUsFailure && isNextPostMailContactUsFailure) {
      this.setState({ 
        alertPopup: { 
          isShow: isNextPostMailContactUsFailure,
          type: 'danger',
        } 
      });   
    }
  }

  render() {
    const { alertPopup } = this.state
    return (
      <Section7Component {...this.props} hideAlert={this.hideAlert} alertPopup={alertPopup} onSubmit={this.OnPostMailContactUs} />
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
    { postMailContactUs }
  ),
  withLang('home/Section7')
);

export default enhance(Section7);
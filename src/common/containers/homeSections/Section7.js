import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { postMailContactUs, postMailContactUsClear }  from 'Actions'
import { Section7Component } from 'Components/homeSections'
import { withLang } from 'Hocs';

class Section7 extends Component {
  state = {
    alertPopup: {
      isShow: false,
      type: 'default',
    },
  }

  OnPostMailContactUs = (formValues) => {
    const { postMailContactUs } = this.props;
    postMailContactUs(formValues);
  }
  
  hideAlert = () => {
    this.setState({ alertPopup: { isShow: false } });    
  }

  componentWillReceiveProps({ isPostMailContactUsSuccess: isNextPostMailContactUsSuccess, isPostMailContactUsFailure: isNextPostMailContactUsFailure }) {
    if (isNextPostMailContactUsSuccess) {
      this.setState({ 
        alertPopup: { 
          isShow: isNextPostMailContactUsSuccess,
          type: 'success',
        } 
      });   
    }
    if (isNextPostMailContactUsFailure) {
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
    { postMailContactUs, postMailContactUsClear }
  ),
  withLang('home/Section7')
);

export default enhance(Section7);

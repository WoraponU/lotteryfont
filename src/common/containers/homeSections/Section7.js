import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { postMailContactUsRequest, postMailContactUsSuccess }  from 'Actions'
import { Section7Component } from 'Components/homeSections'
import { withLang } from 'Hocs';

class Section7 extends Component {
  a = (value) => {
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
  


  render() {
    const { lang, isPostingMailContactUs } = this.props;

    return (
      <Section7Component isPostingMailContactUs={isPostingMailContactUs} lang={lang} onSubmit={this.a} />
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ Mail: mail }) => ({
      isPostingMailContactUs: mail.isPostingMailContactUs
    }),
    // dispatch => ({
    //   sendEmailContactUs(value) {
    //     dispatch(sendEmailContactUs(value))
    //   }
    // }),
    {postMailContactUsRequest, postMailContactUsSuccess}
  ),
  withLang('home/Section7')
);

export default enhance(Section7);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { sendEmailContactUs }  from 'Actions'

// import axios from 'axios'

import { Section7Component } from 'Components/homeSections'
import { withLang } from 'Hocs';

class Section7 extends Component {
  // componentDidMount() {
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:3000/api/mail/send-mail',
  //   })
  //   .then((resp) => {
  //     console.log(resp);
  //   });
  // }
  render() {
    const { lang, sendEmailContactUs } = this.props;

    return (
      <Section7Component lang={lang} onSubmit={sendEmailContactUs} />
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    null,
    dispatch => ({
      sendEmailContactUs(value) {
        dispatch(sendEmailContactUs(value))
        console.log(value);
        
      }
    }),
  ),
  withLang('home/Section7')
);

export default enhance(Section7);
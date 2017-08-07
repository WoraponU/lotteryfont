import axios from 'axios'

import {
  POST_MAIL_CONTACT_US_REQUEST,
  POST_MAIL_CONTACT_US_SUCCESS,
  POST_MAIL_CONTACT_US_FAILURE
} from 'Actions'

function postMailContactUsRequest() {
  return {
    type: POST_MAIL_CONTACT_US_REQUEST,
  }
}

function postMailContactUsSuccess() {
  return {
    type: POST_MAIL_CONTACT_US_SUCCESS,
  }
}

function postMailContactUsFailure() {
  return {
    type: POST_MAIL_CONTACT_US_FAILURE,
  }
}

export function postMailContactUs() {
  return dispatch => {
    dispatch(postMailContactUsRequest())
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/mail/send-mail',
    })
    .then((resp) => {
      dispatch(postMailContactUsSuccess());
    })
    .catch((err) => {
      dispatch(postMailContactUsFailure());
    });
  }
}
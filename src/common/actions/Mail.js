import axios from 'axios'

import {
  POST_MAIL_CONTACT_US_REQUEST,
  POST_MAIL_CONTACT_US_SUCCESS,
  POST_MAIL_CONTACT_US_FAILURE
} from 'Actions'

export function postMailContactUsRequest() {
  console.log('action: postMailContactUsRequest');
  return {
    type: POST_MAIL_CONTACT_US_REQUEST,
  }
}

export function postMailContactUsSuccess() {
  console.log('action: postMailContactUsSuccess');
  return {
    type: POST_MAIL_CONTACT_US_SUCCESS,
  }
}

export function postMailContactUsFailure() {
  console.log('action: postMailContactUsFailure');
  return {
    type: POST_MAIL_CONTACT_US_FAILURE,
  }
}

export function postMailContactUs() {
  console.log('action: postMailContactUs');
  
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
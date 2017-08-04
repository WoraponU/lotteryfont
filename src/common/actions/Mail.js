import {
  POST_MAIL_CONTACT_US_REQUEST,
  POST_MAIL_CONTACT_US_SUCCESS
} from 'Actions'

export function postMailContactUsRequest() {
  return {
    type: POST_MAIL_CONTACT_US_REQUEST,
  }
}

export function postMailContactUsSuccess() {
  return {
    type: POST_MAIL_CONTACT_US_SUCCESS,
  }
}
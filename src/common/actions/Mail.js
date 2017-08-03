import {
  SEND_EMAIL_CONTACT_US,
} from 'Actions'

export function sendEmailContactUs(value) {
  return {
    type: SEND_EMAIL_CONTACT_US,
    value,
  }
}

import {
  SEND_EMAIL_CONTACT_US,
} from 'Actions'


const initialState = {
  sendEmailContactUs: 'th',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SEND_EMAIL_CONTACT_US:
      return { sendEmailContactUs: action.value }
    default:
      return state
  }
}

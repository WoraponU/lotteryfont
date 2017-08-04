import {
  POST_MAIL_CONTACT_US_REQUEST,
  POST_MAIL_CONTACT_US_SUCCESS
} from 'Actions'


const initialState = {
  isPostingMailContactUs: 'false',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case POST_MAIL_CONTACT_US_REQUEST:
      return { isPostingMailContactUs: 'true' }
    case POST_MAIL_CONTACT_US_SUCCESS:
      return { isPostingMailContactUs: 'false' }
    default:
      return state
  }
}

import {
  POST_MAIL_CONTACT_US_REQUEST,
  POST_MAIL_CONTACT_US_SUCCESS
} from 'Actions'

const initialState = {
  isPostingMailContactUs: false,
  isPostMailContactUsSuccess: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case POST_MAIL_CONTACT_US_REQUEST:
      return { 
        isPostingMailContactUs: true,
        isPostMailContactUsSuccess: false
      }
    case POST_MAIL_CONTACT_US_SUCCESS:
      return { 
        isPostingMailContactUs: false,
        isPostMailContactUsSuccess: true        
      }
    default:
      return state
  }
}

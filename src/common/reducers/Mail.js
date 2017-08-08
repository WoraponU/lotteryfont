import {
  POST_MAIL_CONTACT_US_REQUEST,
  POST_MAIL_CONTACT_US_SUCCESS,
  POST_MAIL_CONTACT_US_FAILURE,
  POST_MAIL_CONTACT_US_CLEAR,
} from 'Actions'

const initialState = {
  isPostingMailContactUs: false,
  isPostMailContactUsSuccess: false,
  isPostMailContactUsFailure: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case POST_MAIL_CONTACT_US_REQUEST:
      return { 
        isPostingMailContactUs: true,
        isPostMailContactUsSuccess: false,
        isPostMailContactUsFailure: false
      }
    case POST_MAIL_CONTACT_US_SUCCESS:
      return { 
        isPostingMailContactUs: false,
        isPostMailContactUsSuccess: true,
        isPostMailContactUsFailure: false        
      }
    case POST_MAIL_CONTACT_US_FAILURE:
      return { 
        isPostingMailContactUs: false,
        isPostMailContactUsSuccess: false,
        isPostMailContactUsFailure: true        
      }
    case POST_MAIL_CONTACT_US_CLEAR:
      return { 
        isPostingMailContactUs: false,
        isPostMailContactUsSuccess: false,
        isPostMailContactUsFailure: false        
      }
    default:
      return state
  }
}

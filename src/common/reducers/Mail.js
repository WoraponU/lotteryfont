import {
  POST_MAIL_CONTACT_US_REQUEST,
  POST_MAIL_CONTACT_US_SUCCESS,
  POST_MAIL_CONTACT_US_FAILURE
} from 'Actions'

const initialState = {
  isPostingMailContactUs: false,
  isPostMailContactUsSuccess: false,
  isPostMailContactUsFailure: false,
}

export default (state = initialState, action) => {
    console.log('reducer',action.type);

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
    default:
      return state
  }
}

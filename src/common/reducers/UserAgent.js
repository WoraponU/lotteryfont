import {
  USER_AGENT
} from 'Actions'

const initialState = {
  isCheckUserAgent: false,
  userAgent: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case USER_AGENT:
      return { 
        isCheckUserAgent: true,
        userAgent: action.payload
      }
    default:
      return state
  }
}

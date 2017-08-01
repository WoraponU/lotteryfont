import {
  CHANGE_LANG,
} from 'Actions'


const initialState = {
  lang: 'th',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_LANG:
      return { lang: action.lang }
    default:
      return state
  }
}

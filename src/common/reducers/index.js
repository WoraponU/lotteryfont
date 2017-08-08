import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Mail from './Mail'

export default combineReducers({
  form: formReducer,
  Mail,
})

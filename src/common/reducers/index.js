import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Mail from './Mail'
import UserAgent from './UserAgent'

export default combineReducers({
  form: formReducer,
  Mail,
  UserAgent,
})

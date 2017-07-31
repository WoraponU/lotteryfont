import { combineReducers } from 'redux'
import articles from './articles'
import auth from './auth'
import lang from './lang'

export default combineReducers({
  articles,
  auth,
  lang,
})

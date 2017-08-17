import {
  USER_AGENT,
} from 'Actions'

export function checkUserAgent(userAgent) {
  return {
    type: USER_AGENT,
    payload: userAgent
  }
}
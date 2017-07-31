import {
  CHANGE_LANG,
} from 'Actions'

export function changeLang(lang) {
  return {
    type: CHANGE_LANG,
    lang,
  }
}

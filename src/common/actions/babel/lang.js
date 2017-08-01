import {
  CHANGE_LANG,
} from 'Actions'

export function changeLang(lang) {
  // console.log(lang);
  return {
    type: CHANGE_LANG,
    lang,
  }
}

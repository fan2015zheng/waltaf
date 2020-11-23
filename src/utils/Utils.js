export default class Utils {
  static isEmailValid = isEmailValid
}

function isEmailValid(email) {
  email = email.trim()
  let parts = email.split("@")
  if(parts.length !== 2) {
    return false
  }
  if(!parts[0] || !parts[1]) {
    return false
  }
  parts = parts[1].split(".")
  if(parts.length !==2) {
    return false
  }
  if(!parts[0] || !parts[1]) {
    return false
  }
  return true
}
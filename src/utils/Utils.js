export default class Utils {
  static isEmailValid = isEmailValid
  static isPasswordValid = isPasswordValid
  static getData = getData
  static postData = postData
}

const heroku = true
let root = "http://localhost:5000"
if(heroku) {
  root= "https://login2021.herokuapp.com"
}

function isPasswordValid(password,minLen) {
  if(!password) {
    return false
  }
  if(password.length<minLen) {
    return false
  }
  return true
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

function getData(url, callback) {
  fetchData(url, 'GET', null, callback)
}
function postData(url, request, callback) {
  fetchData(url, 'POST', request, callback)
}
function fetchData(url,method,body,callback) {
  const option = {
    method: method,
    credentials: 'include',
    headers: {'Content-Type':'application/json'},
  }
  if (body) {
    option.body = JSON.stringify(body)
  }
  fetch(`${root}${url}`,option)
  .then(res => res.json())
  .then((data)=>{
    callback(null,data)
  })
  .catch((err)=>{callback(err,null)})
}
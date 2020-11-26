export default class Utils {
  static isEmailValid = isEmailValid
  static isPasswordValid = isPasswordValid
  static getData = getData
  static postData = postData
}

const heroku = false
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

function getData(url, request, callback) {
  fetchData(url, 'GET', request, callback)
}
function postData(url, request, callback) {
  fetchData(url, 'POST', request, callback)
}
function fetchData(url,method,request,callback) {
  fetch(`${root}${url}`,{
    method: method,
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(request)
  })
  .then(res => res.json())
  .then((data)=>{
    callback(null,data)
  })
  .catch((err)=>{callback(err,null)})
}
import React, { useState } from 'react'
import './SignUpCard.css'
import Field from './Field'
import Utils from '../utils/Utils'

export default function SignUpCard({done}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [isValid, setIsValid] = useState(false)
  
  const MIN_LEN = 8
  let valid = true
  let errorMessage = ""
  if (!Utils.isEmailValid(email) ||
    !Utils.isPasswordValid(password,MIN_LEN) ||
    password !== password2) 
  { 
    valid = false
  }
  if(password) {
    if(password.length<MIN_LEN){
      errorMessage = `Password must be at least ${MIN_LEN} characters long`
    } else if(password2 && password2 !== password) {
      errorMessage = "Confirm password does not match password"
    }
  }

  if(isValid !== valid) {
    setIsValid(valid)
  }

  return(<>
    <div className="_loginCard">
      <Field label={"Email"} value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}/>
      <div className="clearfix"/>
      <Field label={"Password"} type={"password"} value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>
      <Field label={"Confirm password"} type={"password"} value={password2}
        onChange={(e)=>{setPassword2(e.target.value)}}/>
      <div className={`_loginBtn btn btn-info ${!isValid?"disabled":""}`}
        onClick={()=>{
          if(!isValid) {return}
          done()
          Utils.postData(`/user/create`,
          {email: email,password: password},
          (err, data)=>{console.log(data)})}}
      >Sign up</div>
      <div className="clearfix"/>
        <div className="_errorMessage">{errorMessage}</div>
    </div>
  </>)
}
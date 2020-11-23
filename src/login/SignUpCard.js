import React, { useState } from 'react'
import './SignUpCard.css'
import Field from './Field'
import Utils from '../utils/Utils'
import SendVerifyCodeButton from './SendVerifyCodeButton'

export default function SignUpCard() {

  const [email, setEmail] = useState("")
  const [isSendDisabled, setIsSendDisabled] = useState(true)
  
  if (Utils.isEmailValid(email)) {
    if (isSendDisabled) {
      setIsSendDisabled(false)
    }
  } else {
    if (!isSendDisabled) {
      setIsSendDisabled(true)
    }
  }
  return(<>
    <div className="_loginCard">
      <Field label={"Email"} value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}/>
      <SendVerifyCodeButton className="_sendVerifyCode btn btn-info" disabled={isSendDisabled}/>
       
      <div className="clearfix"/>
      <Field label="Verify code"/>
      <Field label={"Password"} type={"password"}/>
      <Field label={"Confirm password"} type={"password"}/>
      <div className="_loginBtn btn btn-info">Sign up</div>
      <div className="clearfix"/>
    </div>
  </>)
}
import React from 'react'
import './SignUpCard.css'
import Field from './Field'

export default function SignUpCard() {
  return(<>
    <div className="_loginCard">
      <Field label={"Email"}/>
      <div className="_sendVerifyCode btn btn-info">Send Verify Code</div>
      <div className="clearfix"/>
      <Field label="Verify code" />
      <Field label={"Password"} type={"password"}/>
      <Field label={"Confirm password"} type={"password"}/>
      <div className="_loginBtn btn btn-info">Sign up</div>
      <div className="clearfix"/>
    </div>
  </>)
}
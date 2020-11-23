import React from 'react'
import './LoginCard.css'
import Field from './Field'

export default function LoginCard() {
  return(<>
    <div className="_loginCard">
      <Field label={"Email"}/>
      <Field label={"Password"} type={"password"}/>
      <div className="_loginBtn btn btn-success">Login</div>
    </div>
  </>)
}
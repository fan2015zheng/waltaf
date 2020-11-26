import React, { useState } from 'react'
import './LoginPage.css'
import LoginCard from './LoginCard'
import SignUpCard from './SignUpCard'

export default function LoginPage({setLoginToken}) {

  const [loginState, setLoginState] = useState("login")

  let linkText = ""
  let card = null
  let instruction = ""
  let otherState = ""

  switch(loginState) {
    case "login":
      linkText = "Sign up"
      otherState = "signup"
      card = <LoginCard setLoginToken={setLoginToken}/>
      instruction = "Your letter will be delivered between 2 to 7 days."
      break
    case "signup":
      linkText = "Login"
      otherState = "login"
      card = <SignUpCard done={
        ()=>{setLoginState("login")}
      }/>
      break
    default:
  }

  return(<>
    <div className="_loginPage">
      <div className="_waltaf">
        Write A Letter To A Friend
        <span className="btn btn-link" onClick={()=>{setLoginState(otherState)}}>
          {linkText}
        </span>
      </div>
      <div className="_instruction">{instruction}</div>
      {card}
    </div>
  </>)
}
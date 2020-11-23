import React, { useState } from 'react'
import './LoginPage.css'
import LoginCard from './LoginCard'
import SignUpCard from './SignUpCard'

export default function LoginPage() {

  const [isSignUp, setIsSignUp] = useState()

  let linkText = isSignUp ? "Login": "Sign Up"
  let card = isSignUp ? <SignUpCard /> : <LoginCard />

  return(<>
    <div className="_loginPage">
      <div className="_waltaf">
        Write A Letter To A Friend
        <span className="btn btn-link" onClick={()=>{setIsSignUp(!isSignUp)}}>
          {linkText}
        </span>
      </div>
      <div className="_7days">To mimic hand-written letters, we will not deliver your letters immediately but within 7 days.</div>
      {card}
    </div>
  </>)
}
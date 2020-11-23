import React from 'react'
import './LoginPage.css'
import LoginCard from './LoginCard'

export default function LoginPage() {
  return(<>
    <div className="_loginPage">
      <div className="_waltaf">Write A Letter To A Friend</div>
      <div className="_7days">To mimic hand-written letters, we will not deliver your letters immediately but within 7 days.</div>
      <LoginCard />
    </div>
  </>)
}
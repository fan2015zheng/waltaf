import { useState } from 'react'
import './App.css'
import LoginPage from './login/LoginPage'
import Test from './activity/Test'

export default function App() {

  const [loginToken, setLoginToken] = useState("")
console.log(loginToken)
  let page = <LoginPage setLoginToken={setLoginToken}/>
  if(loginToken) {
    page = <Test setLoginToken={setLoginToken} />
  }
  return (<>
    {page}
  </>)
}

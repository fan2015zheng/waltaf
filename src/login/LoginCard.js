import React, {useState} from 'react'
import './LoginCard.css'
import Field from './Field'
import Utils from '../utils/Utils'

export default function LoginCard({setLoginToken}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginFail, setLoginFail] = useState(false)

  let errorMessage = ""
  if(loginFail && (email || password)) {
    errorMessage = "Email or password is not correct"
  }
  return(<>
    <div className="_loginCard">
    <Field label={"Email"} value={email} 
        onChange={(e)=>{setEmail(e.target.value); setLoginFail(false)}}/>
      <div className="clearfix"/>
      <Field label={"Password"} type={"password"} value={password}
        onChange={(e)=>{setPassword(e.target.value); setLoginFail(false)}}/>

      <div className="_loginBtn btn btn-success"
        onClick={()=>{
          Utils.postData("/user/login",
          {email:email,password:password},
          (err,data)=>{
            if(data.ok) {
              setLoginToken(data.token)
            } else {
              setLoginFail(true)
            }
          }
          )
        }}
      >Login</div>
      <div className="clearfix"></div>
      <div className="_errorMessage">{errorMessage}</div>
    </div>
  </>)
}
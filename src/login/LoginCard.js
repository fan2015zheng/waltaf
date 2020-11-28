import React, {useState} from 'react'
import './LoginCard.css'
import Field from './Field'
import Utils from '../utils/Utils'

export default function LoginCard({setIsLoggedIn}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginFailMessage, setLoginFailMessage] = useState(false)

  return(<>
    <div className="_loginCard">
    <Field label={"Email"} value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}/>
      <div className="clearfix"/>
      <Field label={"Password"} type={"password"} value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>

      <div className="_loginBtn btn btn-success"
        onClick={()=>{
          Utils.postData("/user/login",
          {email:email,password:password},
          (err,data)=>{
            console.log(err, data)
            if(data && data.ok) {
              setIsLoggedIn(true)
            } else {
              setLoginFailMessage(data.error)
            }
          }
          )
        }}
      >Login</div>
      <div className="clearfix"></div>
      <div className="_errorMessage">{loginFailMessage}</div>
    </div>
  </>)
}
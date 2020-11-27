import { useEffect, useState } from 'react'
import './App.css'
import LoginPage from './login/LoginPage'
import Test from './activity/Test'
import Utils from './utils/Utils'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    if(!isLoggedIn) {
      Utils.getData("/user/isLoggedIn", (err, data)=>{
        if(data && data.ok) {
          setIsLoggedIn(true)
        }
      })
    }
  },[isLoggedIn])

  let page = <LoginPage setIsLoggedIn={setIsLoggedIn}/>
  if(isLoggedIn) {
    page = <Test setIsLoggedIn={setIsLoggedIn}/>
  }
  return (<>
    {page}
  </>)
}

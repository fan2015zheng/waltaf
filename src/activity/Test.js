import Utils from '../utils/Utils'

export default function Test({setIsLoggedIn}) {
  return(<>
    <h1>Welcome to Write a Letter</h1>
    <textarea ></textarea>
    <br/>
    <button onClick={()=>{
      Utils.getData("/user/logout", (err, data)=>{
        console.log(err, data)
        setIsLoggedIn(false)
      })
    }} className="btn btn-danger">Logout</button>
  </>)
}
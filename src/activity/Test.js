
export default function Test({setLoginToken}) {
  return(<>
    <h1>Welcome to Write a Letter</h1>
    <textarea ></textarea>
    <br/>
    <button onClick={()=>{setLoginToken("")}} className="btn btn-danger">Logout</button>
  </>)
}
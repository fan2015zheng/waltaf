import React, { useState } from 'react'
import './Button.css'

export default function Button({className, caption, disabled}) {

  const [isDisabled, setIsDisabled] = useState(false)
  return(<>
     <div className={`${className} ${disabled || isDisabled ? "disabled" : ""}`}
        onClick={()=>{
          if(disabled || isDisabled) {
            return
          }
          setIsDisabled(true)
          setTimeout(()=>{setIsDisabled(false)},2000)
        }}>
         {caption}
      </div>
  </>)
}
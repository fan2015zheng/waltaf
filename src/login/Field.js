import React from 'react'
import './Field.css'

export default function Field({label, type, value, onChange}) {
  return(<>
    <label className="_label">{label}</label>
    <input className="_field"
      value={value} onChange={onChange}
      type={type}/>
  </>)
}
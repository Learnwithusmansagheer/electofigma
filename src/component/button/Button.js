import React from 'react'

export default function Button(props) {
  return (
    <div>
     <button id='buttonw' type="button" className={`  ${props.className}`} style={props.style}>{props.title}</button>
    </div>
  )
}

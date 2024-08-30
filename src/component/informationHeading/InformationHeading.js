import React from 'react'
import './informaitionheading.css'
export default function InformationHeading({heading}) {
  return (
    <div>
      <div className="i ">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

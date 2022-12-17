import React from 'react'

const About = ({countMe, dec}) => {

    const clickMe = (text) => {
        alert(text)
    }

  return (
    <div>
   <button >{countMe}</button>
   <button onClick={()=>dec()} >-</button>

    </div>
  )

}

export default About
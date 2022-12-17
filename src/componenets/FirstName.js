import React from 'react'
import About from '../About'
import  { useSelector } from 'react-redux';

const firstname = () => {
    const fname = useSelector((state)=>state.FirstName)
    return(
       <div>
      fname
       </div>
  )
}

export default firstname

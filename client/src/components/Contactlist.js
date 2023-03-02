import React from 'react'
import { useSelector } from 'react-redux'

const Contactlist = () => {
    const state= useSelector(state=>state.contact.contact)
  return (
    <div>
      {state?.map((el)=><h1>{el.name}</h1>)}
    </div>
  )
}

export default Contactlist


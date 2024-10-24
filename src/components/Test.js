import React, { useState } from 'react'
import Card from './Card'
import Card1 from './Card1'

export default function Test(props) {
  const [image,setImage]=useState(null);
  const imageRef=(imageval)=>{
    setImage(imageval)
  }
  return (
    <div className='d-flex'>
        <Card1 imageRef={imageRef} triggerAlert={props.triggerAlert} mode={props.mode}/>
        <Card image={image} mode={props.mode}/>
    </div>
  )
}

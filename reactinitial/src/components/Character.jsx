import React, {useEffect, useState} from 'react'
import {Button} from '@mui/material'

function Character({person}) {

  const [show, setShow] = useState(false)



    console.log(person);
  return (
    <div>
        <h1>{person.name}</h1>
        {show && 
    <>
    <h2>{person.details}</h2>
    </>}
    <Button variant='contained' onClick={() => setShow(show ? false : true)}>{!show ? "Show More" : "Show Less"}</Button>
    </div>
  )
}

export default Character
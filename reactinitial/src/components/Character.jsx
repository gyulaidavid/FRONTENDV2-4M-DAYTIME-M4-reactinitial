import React, {useEffect, useState} from 'react'


function Character({person}) {

  const [show, setShow] = useState(false)



    console.log(person);
  return (
    <div>
        <h1>{person.name}</h1>
        {show && 
    <>
    <h1>{person.details}</h1>
    </>}
    <button onClick={() => setShow(show ? false : true)}>{!show ? "Show More" : "Show Less"}</button>
    </div>
  )
}

export default Character
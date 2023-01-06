import React, {useEffect, useState} from 'react'


function Character({person}) {




    console.log(person);
  return (
    <div>
        <h1>{person.name}</h1>
    <button>Show more</button>
    </div>
  )
}

export default Character
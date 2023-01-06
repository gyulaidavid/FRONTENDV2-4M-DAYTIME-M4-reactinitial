import React from "react";
import Character from "./Character";

function Characters({ useData }) {
  return (
    <div>
    
      {/* {useData.map((person, i) => (
        <div>{person.name}</div>
      ))} */}


         {useData.map((person, i) => (
        <Character person={person} key={i}/>
      ))}
      
      <br></br>
      <br></br>
      <br></br>
    </div>
    
  );
}

export default Characters;

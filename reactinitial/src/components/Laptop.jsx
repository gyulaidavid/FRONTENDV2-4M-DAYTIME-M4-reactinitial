import React, { useState } from "react";
import Button from "@mui/material/Button";


function Laptop({ laptop }) {
  console.log(laptop);

  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <h1>{laptop.brand}</h1>
        {show && (
          <>
            <div>{laptop.name}</div>
            <div>{laptop.weight}</div>
          </>
        )}

        <Button variant="contained" 
        onClick={() => setShow(show ? false:true)}>

          {!show ? 'Show more' : 'Show less'} 
        </Button>
      </div>
     
    </>
  );
}

export default Laptop;

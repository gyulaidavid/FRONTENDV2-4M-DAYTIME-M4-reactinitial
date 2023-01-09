import React from 'react'
import Laptop from './Laptop'

function Laptops({fetchData }) {

console.log(fetchData);
    console.log(fetchData);

  return (
    <div>
   { fetchData.map((laptop, i) =>(<Laptop key={i} laptop={fetchData}/>) )    
 }
    </div>
  )
}

export default Laptops
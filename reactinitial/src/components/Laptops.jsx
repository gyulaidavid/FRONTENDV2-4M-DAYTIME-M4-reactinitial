import React from 'react'
import Laptop from './Laptop'

function Laptops({fetchData}) {



  return (
    <div>
   { fetchData.map((laptop, i) =>(<Laptop key={i} laptop={laptop}/>) )    
 }

    </div>
  )
}

export default Laptops
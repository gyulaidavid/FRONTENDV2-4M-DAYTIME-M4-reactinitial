import React, { useEffect, useState } from "react";
import Laptop from "./components/Laptop";


const App = () => {
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    fetch("https://demoapi.com/api/laptop")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

console.log(fetchData);



  return (
 <>
 <div>
Helló
{fetchData.map((laptop) => (
   <Laptop
   laptopName={laptop.name}
   laptopBrand={laptop.brand}
   laptopWeight={laptop.weight}
 />
))}
</div>
</>
  )
};

export default App;

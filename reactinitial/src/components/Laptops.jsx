import React from "react";

import Laptop from "./Laptop";

function Laptops({ fetchData, filter }) {
  console.log("laptops:", fetchData);

  return (
    <>    <div>
      {!fetchData ?
        fetchData.filter((laptop) =>
          laptop.brand.toLowerCase()
          .includes(filter.toLowerCase())
        ) :
        fetchData.filter((laptop) =>
        laptop.name.toLowerCase()
        .includes(filter.toLowerCase())
      )

        .map((laptop, i) => (
          <Laptop key={i} laptop={laptop} />
        ))}


    </div>
    </>

  );
}

export default Laptops;

import React, { useEffect, useState } from "react";
import Laptops from "./components/Laptops";
import LoadingMask from "./components/LoadingMask";

const App = () => {
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    fetch("https://demoapi.com/api/laptop")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  return <div>
<header>Header</header>
{fetchData.length > 0 ?(<Laptops fetchData={fetchData}/>) : <LoadingMask/>}
  </div>;
};

export default App;

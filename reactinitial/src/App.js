import React, { useEffect, useState } from "react";
import Laptops from "./components/Laptops";
import LoadingMask from "./components/LoadingMask";
import { TextField, Button } from "@mui/material/";


const App = () => {
  const [fetchData, setFetchData] = useState([]);
  const [filter, setFilter] = useState("");
  const [highest, setHighest] = useState(true);

  useEffect(() => {
    fetch("https://demoapi.com/api/laptop")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  const sortHighest = (array) => {
    if (highest === true) {
      setFetchData(array.sort((a, b) => b.weight - a.weight));
    }
    if (highest === false) {
      setFetchData(array.sort((a, b) => a.weight - b.weight));
    }
  };

  return (
    <>
      <div>
        <header>
          <TextField
            id='outlined-basic'
            label='Search'
            variant='outlined'
            value={filter}
            onChange={(event) => {
              setFilter(event.target.value);
            }}
          />
          <br></br>
          <br></br>Sorbarendezés
          <Button
            variant='contained'
            onClick={() => {
              sortHighest(fetchData);
              setHighest(highest ? false : true);
            }}
          >
            sort
          </Button>
        </header>
        {fetchData.length === 0 ? (
          <LoadingMask />
        ) : (
          <Laptops fetchData={fetchData} filter={filter} />
        )}

      </div>
    </>
  );
};

export default App;

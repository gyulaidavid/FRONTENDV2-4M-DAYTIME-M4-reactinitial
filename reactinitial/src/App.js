import React, { useEffect, useState } from "react"
import Characters from "./components/Characters"
import LoadingMask from "./components/LoadingMask"
import Subscription from "./components/Subscription"

const App = () => {

  const [useData, setUseData] = useState([])
 

useEffect(() => {
fetch('https://demoapi.com/api/series/howimetyourmother')
.then((res) => res.json())
.then((data) => setUseData(data))

},[])
console.log(useData);

const [showSubcription, setShowSubcription] = useState(false);

useEffect(() => {
    setTimeout(() => setShowSubcription(true), 3000);
}, []);


  return (
    <div>
      <h1>Series Api</h1>

      {useData.length > 0 ? (
        <Characters useData={useData} />
      ) : (
       <LoadingMask/>
      )}

{ showSubcription ? <Subscription useData={useData} setUseData={setUseData} setShowSubcription={setShowSubcription}/> : null }


          </div>
  )
}

export default App

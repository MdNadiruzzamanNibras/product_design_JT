import { useEffect } from "react";


const App = () => {
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
    .then(data=> console.log(data))
  },[])
  return (
    <div>
      
    </div>
  );
};

export default App;
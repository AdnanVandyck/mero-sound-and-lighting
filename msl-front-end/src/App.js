import { useEffect, useState } from "react";
import Home from "./pages/Home";


import axios from 'axios'





function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8200')
    .then((response) => setMessage(response.data))
    .catch((error) => console.log(error));
  })
  return (
    <div className="App">
      <Home />
      <p>{message}</p>

    </div>
  );
}

export default App;

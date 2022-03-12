import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [a,setA] = useState(1)
    const conside=()=>{
       setA(++a)
        console.log(a)
    }
    const zero =()=>{
     setA(0)
        console.log (0)
    }
  return (
    <div className="App">
        <h1>{a}</h1>
     <button onClick={conside}>number</button>
     <button onClick={zero}>0</button>
    </div>
  );
}

export default App;

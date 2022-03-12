import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [a,setA] = useState(1)
    const conside=()=>{
       setA(++a)
        console.log(a)
    }
    let [b,setB]=useState(0)
    const zero =()=>{
     setA(0)
        console.log (b)
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

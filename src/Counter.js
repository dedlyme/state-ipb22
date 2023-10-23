
import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);
  function palielinatajs() {
    setCount(count + parseInt(input));
  }

function handleInput(event){
  setInput(event.target.value);
}

  
  return ( 
  <div className="App">
    <h2>{props.name}</h2>
    <input type="number" value={input} onChange={handleInput}></input>
  <button onClick={palielinatajs}>{input}</button>
    <h1>{count}</h1>
  </div>
  );
}

export default Counter;
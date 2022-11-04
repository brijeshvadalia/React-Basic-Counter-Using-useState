import {useState} from 'react';
import './app.css'

function App() {
    const [counter,setCounter]= useState(0)
  return (
<>
<h1> Counter App using state/Hooks</h1>
<h2>Count is {counter}</h2>
<button onClick={()=>setCounter(0)} >Reset</button>
<br/>
<br/>
<br/>

<button onClick={()=>setCounter(counter+1)}>Increment</button>
<br/>
<br/>
<br/>

<button onClick={()=>counter <= 0 ? "" : setCounter(counter-1)}>Decrement</button>
</>
    )
}

export default App
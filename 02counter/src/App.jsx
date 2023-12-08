import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let [count, setCount] = useState(15)

  // const addValue = () => {
  //   setCount(count += 1);
  // }

  // const removeValue = () => {
  //   setCount(count -= 1);
  // }



  // let [count, setCount] = useState(15)
  // const x = 20;
  // const y = 0;

  // const addValue = () => {
  //   count += 1;
  //   if (count > 20) setCount(x);
  //   setCount(count);
  // }

  // const removeValue = () => {
  //   count -= 1;
  //   if (count < 0) setCount(y);
  //   setCount(count);
  // }



  // let [count, setCount] = useState(15)
  // const x = 20;
  // const y = 0;

  // const addValue = () => {
  //   setCount(prevCount => {
  //     let newCount = prevCount + 1;
  //     if (newCount > 20) return x;
  //     return newCount;
  //   });
  // }

  // const removeValue = () => {
  //   setCount(prevCount => {
  //     let newCount = prevCount - 1;
  //     if (newCount < 0) return y;
  //     return newCount;
  //   });
  // }



  // let [count, setCount] = useState(15)

  // const addValue = () => {
  //   setCount(prevCount => prevCount + 1);
  //   setCount(prevCount => prevCount + 1);
  // }

  // const removeValue = () => {
  //   setCount(prevCount => prevCount - 1);
  //   setCount(prevCount => prevCount - 1);
  // }

  // return (    
  //   <>
  //     <h1>Niraj</h1>
  //     <h2>Count: {count}</h2>
  //     <p>
  //     <button onClick={addValue}>Add</button>  <button onClick={removeValue}>Remove</button>
  //     </p>
  //   </>
  // )





  let [count, setCount] = useState(15)
  return (    
    <>
      <h1>Niraj</h1>
      <h2>Count: {count}</h2>
      <p>
      <button onClick={() => setCount(count += 1)}>Add</button>  <button onClick={() => setCount(count -= 1)}>Remove</button>
      </p>
    </>
  )
}

export default App

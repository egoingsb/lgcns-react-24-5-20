import { useEffect, useState } from 'react';
import './App.css'

function Counter({title, initValue}:{
  title: string;
  initValue: number;
}){
  const [value, setValue] = useState(initValue);
  const [step, setStep] = useState(10);

  useEffect(()=>{
    console.log('loading...')
    fetch('http://localhost:9999/counter')
      .then(type=>type.json())
      .then(result=>{
        setValue(result.value)
      });
  },[])
  


  function incrementValue(){
    const option = {
      method: 'PUT',
      body: JSON.stringify({value:value+step}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:9999/counter',option)
      .then(type=>type.json())
      // @ts-ignore
      .then(result=>{
        setValue(value+step)
      });
  }
  function decrementValue(){
    const option = {
      method: 'PUT',
      body: JSON.stringify({value:value-step}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:9999/counter',option)
      .then(type=>type.json())
      // @ts-ignore
      .then(result=>{
        setValue(value-step)
      });
  }
  // @ts-ignore
  function changeHandler(evt){
    setStep(Number(evt.target.value));
  }
  return <>
    <h1>{title}</h1>
    <button onClick={incrementValue}>+</button> 
    <button onClick={decrementValue}>-</button>
    <input type="text" value={step} onChange={changeHandler}></input> 
    {value}
  </>
}

function App() {
  return (
    <>
      <Counter title="카운터" initValue={10}></Counter>
    </>
  )
}

export default App

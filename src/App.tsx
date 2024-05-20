import { useState } from 'react';
import './App.css'

function Counter({title, initValue}:{
  title: string;
  initValue: number;
}){
  const [value, setValue] = useState(initValue);
  const [step, setStep] = useState(10);
  function incrementValue(){
    setValue(value+step); // or setValue(prev=>prev+1);
  }
  function decrementValue(){
    setValue(value-step);
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
      <Counter title="불면증 카운터" initValue={20}></Counter>
      <Counter title='피로 카운터' initValue={30}></Counter>
    </>
  )
}

export default App

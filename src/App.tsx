import { useState } from 'react';
import './App.css'

function Counter({title, initValue}:{
  title: string;
  initValue: number;
}){
  const countState = useState(initValue);
  const value = countState[0];
  const setValue = countState[1];
  console.log('value', value);
  function handleClick(){
    setValue(value+1);
  }
  return <>
    <h1>{title}</h1>
    <button onClick={handleClick}>+</button> {value}
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

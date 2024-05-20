import { useEffect, useState } from 'react';
import './App.css'
import { Button, ButtonGroup, Container } from '@mui/material';

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
  


  async function incrementValue(){
    const option = {
      method: 'PUT',
      body: JSON.stringify({value:value+step}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // fetch('http://localhost:9999/counter',option)
    //   .then(type=>{
    //     return type.json()
    //   })
    //   .then(result=>{
    //     setValue(value+step)
    //   });
    const type = await fetch('http://localhost:9999/counter',option);
    const result = await type.json();
    setValue(value+step);

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
  return <Container maxWidth="sm">
    <h1>{title}</h1>
    <ButtonGroup variant='contained'>
      <Button onClick={incrementValue}>+</Button> 
      <Button onClick={decrementValue}>-</Button>
      <Button onClick={decrementValue}>-</Button>
    </ButtonGroup>
    <input type="text" value={step} onChange={changeHandler}></input> 
    {value}
  </Container>
}

function App() {
  return (
    <>
      <Counter title="카운터" initValue={10}></Counter>
    </>
  )
}

export default App

import './App.css'

function Counter(props){
  console.log('props', props);
  const title = props.title;
  const initValue = props.initValue;
  return <>
    <h1>{title}</h1>
    <button>+</button> {initValue}
  </>
}

function App() {
  return (
    <>
      <Counter title="카운터" initValue="10"></Counter>
      <Counter title="불면증 카운터" initValue="20"></Counter>
    </>
  )
}

export default App

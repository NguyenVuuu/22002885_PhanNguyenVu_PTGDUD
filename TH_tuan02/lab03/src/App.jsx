import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[a, setA]= useState(0);
  const[b, setB]= useState(0);
  const[result, setResult]= useState(0);
  const[value, setValue]= useState('');


  function handleSetA(e){
    setA(e.target.value);
  }

  function handleSetB(e){
    setB(e.target.value);
  }

  function handleChange(e) {
    setValue(e.target.id);
  }

  function handleClick(){
    if(value === 'cong'){
      setResult(parseInt(a) + parseInt(b));
    }else if(value === 'tru'){
      setResult(parseInt(a)-parseInt(b));
    }else if(value === 'nhan'){
      setResult(parseInt(a) * parseInt(b));
    }else if(value === 'chia'){
      setResult(parseInt(a) / parseInt(b));
    }
  }
  return (
    <>
      <input onChange={handleSetA} type="number" />
      <br />
      <input onChange={handleSetB} type="number" />
      <br />
      <input type="radio" onChange={handleChange} name='calc' id='cong' />
      <span>+</span>
      <input type="radio" onChange={handleChange} name='calc' id='tru' />
      <span>-</span>
      <input type="radio"  onChange={handleChange} name='calc' id='nhan'/>
      <span>*</span>
      <input type="radio" onChange={handleChange} name='calc' id='chia' />
      <span>/</span>
      <br />
      <button onClick={handleClick}>Calc</button>
      <br />
      <span>Result: {result}</span>
    </>
  )
}

export default App

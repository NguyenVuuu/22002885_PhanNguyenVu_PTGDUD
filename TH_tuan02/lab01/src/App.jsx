import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name , setName] = useState('')
  const [value , setValue] = useState('')

  function handleClick ()  {
    setValue(name);
  }

  function handleChange (e) {
    setName(e.target.value)
  }
  return (
    <>
      <input value={name} onChange={handleChange} type="text" />
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <span>Hello: </span>
      <span>{value}</span>
      <br />
    </>
  )
}

export default App

import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// viết chương trình có 2 ô input cho phép nhập vào 2 số a, b vào input và khi click vào button "sum" thì hiện kết quả vào span
// làm
// 1. tạo 2 state a, b
// 2. tạo 1 hàm handleChange để lấy giá trị từ input
// 3. tạo 1 hàm handleClick để xử lý sự kiện click
// 4. hiển thị kết qủa 

function App() {
  const [sum, setSum] = useState(0)
  const [value , setValue] = useState('')
  const [a, setA]= useState(0);
  const [b, setB]= useState(0);

  function handleSetA(e){
    setA(e.target.value);
  }

  function handleSetB(e){
    setB(e.target.value);
  }

  function handleClick ()  {
    var c = parseInt(a) + parseInt(b);
    setSum(c);
  }

  return (
    <>
      <h1>Sum</h1>
      <input  onChange={handleSetA} type="number" />
      <input  onChange={handleSetB} type="number" />
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <span>Sum: </span>
      <span>{sum}</span>
      <br />
    </>
  )
}

export default App;
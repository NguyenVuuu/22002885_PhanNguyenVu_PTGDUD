import { useRef, useState, useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef("");
  

  const handleClick=()=>{
    setName(inputRef.current.value);
    // console.log(inputRef.current.value);
  }
  function reducer(state, action){
    switch(action.type){
      case '+':
        return {...state, count:state.count+1};
      case '-':
        return {...state, count:state.count-1};
      default:
        return state;
    }
  }

  var [state, dispatch]=useReducer(reducer,{
    count:0
  });
  var valueInput = useRef(0);

  function handlePlus(){
    dispatch({type:'+'});
  }

  function handleMinus(){
    dispatch({type:'-'});
  }

  var [data,setData] = useState([]);
  useEffect(()=>{
    var url ='https://67da1c8d35c87309f52b0083.mockapi.io/name/hieu';
    fetch(url).then((res)=>{
      return res.json();
    }).then((dataApi)=>{
      setData(dataApi);
    })
  })
  
  return (
    <>
     
      <div className=''>
        <h1>UseRef</h1>
        <input type='text' ref={inputRef}className='border-1 p-2' placeholder='input name' >
        </input>
        <br />
        <button onClick={handleClick} className=" cursor-pointer bg-transparent hover:bg-blue-500 rounded-full text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Button
        </button>
        <br />
        <span>Name: {name}</span>
      </div>

      <hr />
      <div>
        <h1>UseReducer</h1>
        <div className="inline-flex">
          <button onClick={handleMinus} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            -
          </button>
          <button onClick={handlePlus} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            +
          </button>
        </div>
        <br />
        <span>{state.count}</span>
      </div>
      <hr />
      <div>
        <h1>FetchAPI</h1>
        <ul>
          {
            data.map((item,index)=>{
              return <li key={index}>{item.name}</li>
            })
          }
        </ul>
          
      </div>
    </>
  )
}

export default App

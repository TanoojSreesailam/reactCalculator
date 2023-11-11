import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState("");
  const [result, setResult] = useState(0);
  const handler = (e) =>{
    setData(e.target.value);
  }
  return (
    <div>
      <center>
        <h1> Calc (Tanuzz) </h1>
        <input className='In' type="text" name='input' value={data} onChange={handler} /><br />

        <h2>{result}</h2>
        <div className='buttons'>
        <button onClick={() => setData(data+'1')}>1</button>
        <button onClick={() => setData(data+'2')}>2</button>
        <button onClick={() => setData(data+'3')}>3</button>
        <button onClick={() => setData(data+'4')}>4</button>
        <button onClick={() => setData(data+'5')}>5</button><br />
        <button onClick={() => setData(data+'6')}>6</button>
        <button onClick={() => setData(data+'7')}>7</button>
        <button onClick={() => setData(data+'8')}>8</button>
        <button onClick={() => setData(data+'9')}>9</button>
        <button onClick={() => setData(data+'0')}>0</button><br />
        <button onClick={() => setData(data+'+')}>+</button>
        <button className='sub' onClick={() => setData(data+'-')}>-</button>
        <button className='mul' onClick={() => setData(data+'*')}>x</button>
        <button className='divi' onClick={() => setData(data+'/')}> /</button>
        <button className='clr' onClick={() => setData('')}>AC</button><br />
        <button  className='divi' onClick={() => setData(data+'(')}> ( </button>
        <button className='divi' onClick={() => setData(data+'/')}> ) </button>
        <button className='dot' onClick={() => setData(data+'.')}>.</button>

        <button onClick={() => setResult(eval(data))}>=</button><br />
        </div>

      </center>
    </div>
  )
}

export default App


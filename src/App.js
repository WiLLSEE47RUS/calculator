import {useState} from 'react'

function App() {

  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', '*', '+', '-', '.']

  const updateCalc = value => {
    if(
        (operators.includes(value) && calc === '' )||
        (operators.includes(value) && operators.includes(calc.slice(-1)))
    ){
      return;
    }

    if(!operators.includes(value)){
      setResult(eval(calc+value).toString())
    }

    setCalc(calc + value)
  }

  const calculate = () =>{
    if(calc === '') return;
    setCalc(eval(calc).toString())
  }
  const deleteLast = () =>{
    if(calc === '') return;
    const value = calc.slice(0,-1);
    setCalc(value)

  }

  const clear = () =>{
    setCalc('')
    setResult('')
  }

  const createDigits = () =>{
    const digits = [];

    for (let i = 1; i< 10; i++){
      digits.push(<button onClick={ () =>updateCalc(i.toString())} key = {i}>{i}</button>)
    }
    return digits;
  }


  return (
    <div className="App">
        <div className="calculator">
          <div className="display">
            { result? <span>({result})</span>: ''}  {calc || '0'}
          </div>

          <div className="operators">
            <button onClick={clear}>CLR</button>
            <button onClick={ () =>updateCalc('/')}>/</button>
            <button onClick={ () =>updateCalc('*')}>*</button>
            <button onClick={ () =>updateCalc('+')}>+</button>
            <button onClick={ () =>updateCalc('-')}>-</button>


            <button onClick={deleteLast}>DEL</button>
          </div>

          <div className="digits">
            { createDigits() }
            <button onClick={ () =>updateCalc('0')}>0</button>
            <button onClick={ () =>updateCalc('.')}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
    </div>
  );
}

export default App;

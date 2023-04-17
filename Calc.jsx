import React,{useState} from 'react'

export default function Calc() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);
    const [multiply, setMultiply] = useState(0);
  
    const handleSum = () => {
      setSum(number1 + number2);
    };
  
    const handleMultiply = () => {
      setMultiply(number1 * number2);
    };
  
    return (
      <div>
        <div>
          <label>Number 1:</label>
          <input type="number" value={number1} onChange={e => setNumber1(e.target.value)} />
        </div>
        <div>
          <label>Number 2:</label>
          <input type="number" value={number2} onChange={e => setNumber2(e.target.value)} />
        </div>
        <div>
          <button onClick={handleSum}>Sum</button>
          <button onClick={handleMultiply}>Multiply</button>
        </div>
        <div>
          <label>Sum: {sum}</label>
        </div>
        <div>
          <label>Multiply: {multiply}</label>
        </div>
      </div>
    );
  }

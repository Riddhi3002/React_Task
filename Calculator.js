import React, { useState } from 'react';
function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');
 {/* Multiple operation using one function */}
  const handleCalculate = () => {
    let resultValue;
    switch(operation) {
      case '+':
        resultValue = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        resultValue = parseInt(num1) - parseInt(num2);
        break;
      case '*':
        resultValue = parseInt(num1) * parseInt(num2);
        break;      
      case '/':
        resultValue = parseInt(num1) / parseInt(num2);
        break;
      default:
        resultValue = 'Invalid operation';
    }
    setResult(resultValue);
  };
 
  return (
    <div className ='box'>
    <h1 className="heading">Calculate Value Using Single Function in Hooks</h1>
      <input type="number"  placeholder="Enter No1" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number"  placeholder="Enter No2" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}> {/* Assign multiple operation in select tag*/}
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
    
      <button onClick={handleCalculate}>Calculate</button>
      <h2>Result: {result}</h2>
    </div>
  );
}
 
export default Calculator;
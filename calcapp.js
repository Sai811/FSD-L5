import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');    // First number input
  const [num2, setNum2] = useState('');    // Second number input
  const [result, setResult] = useState(''); // Result to display

  // Function to handle mathematical operations
  const handleOperation = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        res = '';
    }
    setResult(res.toString());
  };

  // Clear the input fields and result
  const clearFields = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
      </div>
      <button onClick={clearFields}>Clear</button>
      <div className="result">
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;
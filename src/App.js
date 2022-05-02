import React, {useState} from 'react';
import './App.css';

function App() {

  //state
  const[weight, setWeight] = useState('')
  const[height, setHeight] = useState('')
  const[bmi, setBmi] = useState('')
  const[text, setText] = useState('')
  const[message, setMessage] = useState('')

  const calcBMI = (event) => {
    //prevent submitting to server
    event.preventDefault()

    if(weight === 0 || height === 0)
    {
      alert('Please enter a valid weight/height... ')
    }
    else{ 
      const heightcms = height/100 
      let bmi = (weight/(heightcms * heightcms)) 
      setBmi(bmi.toFixed(1)) 
      setText('Your BMI : ')
      //conditions for bmi-message to be displayed
      if (bmi < 18.5) {
        setMessage('You are underweight.')
      } 
      else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are healthy.')
      } 
      else if (bmi >= 25 && bmi < 30) {
        setMessage('You are overweight.')
      } 
      else {
        setMessage('You are obese.')
      }
    }
  }
  const reload = (event) => {
    window.location.reload()
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="cntr">BMI CALCULATOR</h2>
        <form onSubmit={calcBMI}>
          <div>
            <label> Weight (in kgs)</label>
            <input value = {weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div>
            <label> Height (in cms)</label>
            <input value = {height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reset</button>
          </div>
        </form>
        
        <div className="cntr">
          <h3>{text}{bmi}</h3>
          <p>{message}</p>
        </div>
      </header>
    </div>
  );
}

export default App;

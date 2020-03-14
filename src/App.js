import React from 'react';
import logo from './logo.svg';
import './App.css';

var personStyle = {
  border: "2px solid yellow",
  marginBottom: "20px",
  padding: "20px",
  width: "400px"
}


function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman S']
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a react Developer. Do you know that?</h1>
        <Person name="Rubel" chakri="Employee"></Person>
        <Person name="Tarek" chakri="JS Ninja"></Person>
        <Person name="Zonayed" chakri="Developer"></Person>
      </header>
    </div>
  );
}

function Person (props){
  return (
    <div style={personStyle}>
      <h3>My name : {props.name}</h3>
      <p>My profession : {props.chakri}</p>
    </div>
  )
}

export default App;

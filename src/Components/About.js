// About.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <br>
      </br>
    <h2>Usestate</h2>
    <br>
    </br>
    <div className="d-flex align-items-center">
      <button className="btn btn-primary mr-2" onClick={decrementCount}>-</button>
      <p>{count}</p>
      <button className="btn btn-primary ml-2" onClick={incrementCount}>+</button>
    </div>
  </div>
);
}

export default About;

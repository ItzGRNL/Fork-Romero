import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SolucaoPorto } from './pages/SolucaoPorto/SolucaoPorto'


function App() {
  const [count, setCount] = useState(0)

  return (
    <SolucaoPorto/>
  );
}

export default App

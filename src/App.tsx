import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BodySolucoes } from './components/BodySolucoes/BodySolucoes'
import {Ajuda} from './pages/Ajuda/Ajuda'
import { Organograma } from './pages/Organograma/Organograma'
import { SolucaoPorto } from './pages/SolucaoPorto/SolucaoPorto'
import { CentralSolucoes } from './pages/CentralSolucoes/CentralSolucoes'
import { ReportarProblema } from './pages/ReportarProblema/ReportarProblema'
import { RevisoesBreves } from './pages/RevisoesBreves/RevisoesBreves'
import { AcionamentoSinistro } from './pages/AcionamentoSinistro/AcionamentoSinistro'
import Dropdown from './components/MenuNav/DropDown'


function App() {
  const [count, setCount] = useState(0)

  return (
    <SolucaoPorto />
  );
}

export default App

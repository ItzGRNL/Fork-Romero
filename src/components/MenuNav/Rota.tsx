import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Ajuda} from './pages/Ajuda/Ajuda'
import { Organograma } from './pages/Organograma/Organograma'
import { CentralSolucoes } from './pages/CentralSolucoes/CentralSolucoes'
import { ReportarProblema } from './pages/ReportarProblema/ReportarProblema'
import { RevisoesBreves } from './pages/RevisoesBreves/RevisoesBreves'
import { AcionamentoSinistro } from './pages/AcionamentoSinistro/AcionamentoSinistro'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" exact component={Ajuda} />
        <Route path="/Organograma" component={Organograma} />
        <Route path="/CentralSolucoes" component={CentralSolucoes} />
        <Route path="/ReportarProblema" component={ReportarProblema} />
        <Route path="/RevisoesBreves" component={RevisoesBreves} />
        <Route path="/AcionamentoSinistro" component={AcionamentoSinistro} />
      </Switch>
    </Router>
  );
}

export default App;
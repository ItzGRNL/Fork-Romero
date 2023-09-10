import React, { useState } from 'react';
import IconeMenu from '../../assets/iconemenu.svg'
import NavigationMenu from './Rota';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/**
  import Ajuda from '../Ajuda'
  import Organograma from '..Organograma'
  import CentralSolucoes from '..CentralSolucoes'
  import ReportarProblema from '../ReportarProblema'
  import RevisoesBreves from '../RevisoesBreves'
  import AcionamentoSinistro from '../AcionamentoSinistro'

   <Router>
                <div>
                    <NavigationMenu />
                    <Switch>
                    <Route path="/Ajuda" component={Ajuda} />
                    <Route path="/Organograma" component={Organograma} />
                    <Route path="/CentralSolucoes" component={CentralSolucoes} />
                    <Route path="/ReportarProblema" component={ReportarProblema} />
                    <Route path="/RevisoesBreves" component={RevisoesBreves} />
                    <Route path="/AcionamentoSinistro" component={AcionamentoSinistro} />
                    </Switch>
                </div>
            </Router>
 */


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-button">
        <img src={IconeMenu} alt="IconeMenu" />
      </button>
      {isOpen && (
        <ul className="dropdown-list">
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
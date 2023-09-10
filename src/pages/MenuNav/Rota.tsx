import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDown.css';

function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={toggleDropdown}>
          Menu
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            <li><Link to="./Ajuda">Ajuda</Link></li>
            <li><Link to="./Organograma">Organograma</Link></li>
            <li><Link to="./CentralSolucoes">Central Solucoes</Link></li>
            <li><Link to="./ReportarProblema">Reportar Problema</Link></li>
            <li><Link to="./RevisoesBreves">Revisoes Breves</Link></li>
            <li><Link to="./AcionamentoSinistro">Acionamento Sinistro</Link></li>
          </ul>
        )}
      </div>
    );
  }

export default NavigationMenu;
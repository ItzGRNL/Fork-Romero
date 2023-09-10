import React, { useState } from 'react';
import IconeMenu from '../../assets/iconemenu.svg'
import { Link } from 'react-router-dom';
import './DropDown.css';


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
          <li><Link to="/about">Ajuda</Link></li>
          <li><Link to="/Organograma">Organograma</Link></li>
          <li><Link to="/CentralSolucoes">Central Solucoes</Link></li>
          <li><Link to="/ReportarProblema">Reportar Problema</Link></li>
          <li><Link to="/RevisoesBreves">Revisoes Breves</Link></li>
          <li><Link to="/AcionamentoSinistro">Acionamento Sinistro</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;